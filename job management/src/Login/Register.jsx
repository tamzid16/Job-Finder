import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Import eye icons
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxiosPublic from "../Page/Hook/UseAxiosPublic";

const Register = () => {
    const axiosPublic = UseAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const apiKey = import.meta.env.VITE_Image_apiKe;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${apiKey}`;

    // Function to upload the image to ImageBB
    const uploadImageToImageBB = async (imageFile) => {
        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            const response = await axiosPublic.post(image_hosting_api, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.data.success) {
                return response.data.data.url; // Return the image URL if the upload is successful
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Upload Failed',
                    text: 'Unable to upload the image. Please try again.',
                });
                throw new Error('Image upload failed');
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Image upload failed. Please try again.',
            });
            throw new Error('Image upload failed');
        }
    };

    // Handle form submission
    const onSubmit = async (data) => {
        setIsLoading(true);

        try {
            // Upload the photo
            const photoURL = await uploadImageToImageBB(data.photo[0]);
            console.log("Uploaded photo URL:", photoURL);

            // Create user
            const result = await createUser(data.email, data.password);
            const registeredUser = result.user;
            console.log(registeredUser);

            // Send email verification
            await registeredUser.sendEmailVerification();
            console.log('Verification email sent!');

            // Update user profile with name and photo URL
            await updateUserProfile(data.name, photoURL); // Make sure updateUserProfile is successful

            // Store user info in the database
            const userInfo = {
                name: data.name,
                email: data.email,
                photoURL: photoURL,
                isVerified: false, // Initially set to false, update later upon email verification
            };

            // Handle adding user data to the database
            try {
                const res = await axiosPublic.post('/users', userInfo);
                if (res.data.insertedId) {
                    reset(); // Reset form on successful registration
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Verification link sent. Please check your email and confirm.',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate('/login'); // Redirect to login page
                }
            } catch (error) {
                console.error("Error adding user to database:", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Database Error',
                    text: 'There was an error saving your data. Please try again later.',
                });
            }

        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: 'There was an issue during the registration process. Please try again.',
            });
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <div className="flex items-center justify-center mt-3 mb-3 px-4 sm:px-3 md:px-4">
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-2xl">
                <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Register</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Name</label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                            placeholder="Enter your full name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Enter a valid email address"
                                }
                            })}
                            className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                            placeholder="you@example.com"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type={showPassword ? "text" : "password"} // Toggle between text and password
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })}
                            className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                            placeholder="Enter your password"
                        />
                        {/* Eye Icon for toggling password visibility */}
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-1/2 right-3 transform -translate-y-1/2 pt-6 text-gray-600"
                        >
                            {showPassword ? (
                                <AiOutlineEyeInvisible size={20} />
                            ) : (
                                <AiOutlineEye size={20} />
                            )}
                        </button>
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Photo Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Profile Photo</label>
                        <input
                            type="file"
                            {...register("photo", { required: "Please upload a photo" })}
                            className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                        />
                        {errors.photo && (
                            <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`w-full bg-indigo-600 text-white p-2 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none transition duration-300 ease-in-out ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="flex justify-center items-center space-x-2">
                                <div className="w-5 h-5 border-4 border-t-4 border-white rounded-full animate-spin"></div>
                                <span>Registering...</span>
                            </div>
                        ) : (
                            "Register"
                        )}
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">Already have an account? <a href="/login" className="text-indigo-600 hover:text-indigo-700">Login</a></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
