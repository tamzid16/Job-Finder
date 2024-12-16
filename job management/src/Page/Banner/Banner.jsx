import img1 from '../../assets/slider/s1.jpg'
import img2 from '../../assets/slider/s2.jpg'
import img3 from '../../assets/slider/s3.jpg'
import img4 from '../../assets/slider/s4.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full h-[420px] lg:h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full " />
                <div className="absolute  flex items-center   h-full  lg:left-0   lg:top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white space-y-7 px-3 lg:px-0 lg:pl-12 lg:w-1/2'>
                        <h1 className="lg:text-5xl font-bold">Find the most exciting startup jobs</h1>
                        <p>Chakri Bakri is a dynamic platform designed to bridge the gap between job seekers and employers. Our user-friendly interface and powerful search tools make it easy for candidates to discover their dream jobs while enabling employers to find the perfect talent for their teams.</p>


                        <div className='flex  gap-3'>
                            <button className="border-2 border-sky-400 px-2 py-2 rounded-lg hover:bg-lime-400">Discover More</button>
                            <button className="border-2 border-sky-400 px-2 py-2 rounded-lg hover:bg-lime-400">Latest Jobs</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

            </div>


            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />

                <div className="absolute  flex items-center   h-full  lg:left-0   lg:top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white space-y-7 px-3 lg:px-0 lg:pl-12 lg:w-1/2'>
                        <h1 className="lg:text-5xl font-bold">Find the most exciting startup jobs</h1>
                        <p>Chakri Bakri is a dynamic platform designed to bridge the gap between job seekers and employers. Our user-friendly interface and powerful search tools make it easy for candidates to discover their dream jobs while enabling employers to find the perfect talent for their teams.</p>


                        <div className='flex  gap-3'>
                            <button className="border-2 border-sky-400 px-2 py-2 rounded-lg hover:bg-lime-400">Discover More</button>
                            <button className="border-2 border-sky-400 px-2 py-2 rounded-lg hover:bg-lime-400">Latest Jobs</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />

                <div className="absolute  flex items-center   h-full  lg:left-0   lg:top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white space-y-7 px-3 lg:px-0 lg:pl-12 lg:w-1/2'>
                        <h1 className="lg:text-5xl font-bold">Find the most exciting startup jobs</h1>
                        <p>Chakri Bakri is a dynamic platform designed to bridge the gap between job seekers and employers. Our user-friendly interface and powerful search tools make it easy for candidates to discover their dream jobs while enabling employers to find the perfect talent for their teams.</p>


                        <div className='flex  gap-3'>
                            <button className="border-2 border-sky-400 px-2 py-2 rounded-lg hover:bg-lime-400">Discover More</button>
                            <button className="border-2 border-sky-400 px-2 py-2 rounded-lg hover:bg-lime-400">Latest Jobs</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />

                <div className="absolute  flex items-center   h-full  lg:left-0   lg:top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white space-y-7 px-3 lg:px-0 lg:pl-12 lg:w-1/2'>
                        <h1 className="lg:text-5xl font-bold">Find the most exciting startup jobs</h1>
                        <p>Chakri Bakri is a dynamic platform designed to bridge the gap between job seekers and employers. Our user-friendly interface and powerful search tools make it easy for candidates to discover their dream jobs while enabling employers to find the perfect talent for their teams.</p>


                        <div className='flex  gap-3'>
                            <button className="border-2 border-sky-400 px-2 py-2 rounded-lg hover:bg-lime-400">Discover More</button>
                            <button className="border-2 border-sky-400 px-2 py-2 rounded-lg hover:bg-lime-400">Latest Jobs</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>


        </div>
    );
};

export default Banner;