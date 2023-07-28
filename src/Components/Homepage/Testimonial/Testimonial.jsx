import React, { useState } from 'react';
import testimonialImg from '/public/assets/img/Testimonialimg.png'
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';

const Testimonial = () => {
    const totalSlides = 4; // Change this to the total number of slides you have
    const [currentSlide, setCurrentSlide] = useState(1);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === totalSlides ? 1 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 1 ? totalSlides : prevSlide - 1));
    };

    
    return (
        <div className="flex flex-col items-center my-24 py-28 bg-gray-100">
            <div className="relative w-full overflow-hidden">
                <div
                    className="flex transition-transform ease-in-out duration-300"
                    style={{
                        transform: `translateX(-${(currentSlide - 1) * (100 / totalSlides)}%)`,
                        width: `${totalSlides * 100}%`,
                    }}
                >
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <div
                            key={index}
                            className="w-full rounded-lg flex flex-col items-center justify-center overflow-hidden"
                        >
                            <div className='rounded-[40px] w-[1163px] bg-[#ffffff] p-14 py-32 pr-96 space-y-14 relative'>
                                <h2 className='my-title relative pb-3 after:h-px after:w-32 after:bg-slate-700 after:absolute after:top-full after:left-0'>Freda Collier</h2>
                                <div className='relative'>
                                    <span><FaQuoteLeft></FaQuoteLeft></span>
                                    <p className='text-2xl'>Ipsum vel nobis doloremque est aut non accusantium vero molestias. Et est minima dolorem eum modi atque sint nobis. Enim quod facere. Reiciendis necessitatibus ipsam non aspernatur voluptate id.</p>
                                    <span className='absolute right-1/3'><FaQuoteRight></FaQuoteRight></span>
                                </div>
                                <div className='flex gap-2'>
                                    {[1, 2, 3, 4, 5].map((elem, ind) => <span key={ind}><FaStar></FaStar></span>)}
                                </div>


                                {/* img */}
                                <div className='absolute right-10 top-20'>
                                    <div className='bg-[#031D44] w-[330px] h-[430px] z-10 absolute -top-[10%] left-20  transform -rotate-[26deg] rounded-[40px]'></div>
                                    <img src={testimonialImg} className='z-20 w-[330px] h-[430px] relative -top-[25px] left-20' />
                                </div>

                                {/* traiangle */}
                                <div className='testimonial-triangle'></div>

                            </div>


                            {/* button */}
                            <div className="flex mt-4 -translate-x-60">
                                <button
                                    className="text-slate-700 font-bold py-2 px-4 rounded-l"
                                    onClick={prevSlide}
                                >
                                    <FaArrowLeft></FaArrowLeft>
                                </button>
                                <div className=" text-gray-700 font-bold py-2 px-4">
                                    <span className='text-3xl'>{currentSlide < 10 ? `0${currentSlide}` : `${currentSlide}`}</span> / {totalSlides}
                                </div>
                                <button
                                    className="text-slate-700 font-bold py-2 px-4 rounded-r"
                                    onClick={nextSlide}
                                >
                                    <FaArrowRight></FaArrowRight>
                                </button>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Testimonial;
