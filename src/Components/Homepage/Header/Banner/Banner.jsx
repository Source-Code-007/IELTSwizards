import bannerImg from '/public/assets/img/banner/bannerRight.png'
import bannerImgBg from '/public/assets/img/banner/bannerImgBg.png'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";


// TODO: ul list disc modifiy
const Banner = () => {
    const [formStatus, setFormStatus] = useState('start')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

    };

    return (
        <div className="h-[93vh] relative overflow-hidden">
            <div className='h-full px-8 md:px-12 lg:px-16 grid grid-cols-2 items-center'>
                {/* banner left */}
                <div className='text-center space-y-4'>
                    <h2 className="text-[#001E43] text-xl md:text-3xl lg:text-5xl font-bold">Start Your IELTS Preparation <br /> And Get Desire Bands</h2>
                    <ul className='list-disc text-[#000000] inline-flex flex-col'>
                        <li>Get access to IELTS Centralised Library</li>
                        <li>British Council Certified Teacher</li>
                    </ul>

                    {/* form */}
                    <form onSubmit={handleSubmit(onSubmit)} className='rounded-[53px] py-6 px-12 w-[635px] mx-auto' style={{ boxShadow: '0px 4px 50px 0px #0D19481F' }}>
                        {/* status */}
                        <div className='flex justify-center gap-4'>
                            <span className='bg-orange-500 rounded flex gap-2 items-center'> <FaRegCheckCircle></FaRegCheckCircle> Start</span>
                            <span className='bg-orange-500 rounded'>Fill details</span>
                            <span className='bg-orange-500 rounded'>Confirm</span>
                        </div>

                        {/* Name and phone number */}
                        {formStatus === 'start' && <div className='space-y-8'>
                            <h2 className='my-subtitle text-left'>Free IELTS Classes</h2>
                            <input className='my-inp' {...register("name", { required: true })} placeholder='Enter your full name' />
                            {errors.name && <span>This field is required</span>}
                            <div className='my-3 flex gap-3'>
                                <input className='my-inp !w-14' {...register("countryCode", { required: true })} placeholder='country' />
                                <input className='my-inp flex-1' {...register("number", { required: true })} placeholder='Phone number' />
                                {errors.number && <span>This field is required</span>}
                            </div>
                            <button className='my-btn-one w-full' onClick={() => setFormStatus('details')}>Continue</button>
                        </div>}

                        {/* details */}
                        {
                            formStatus === 'details' && <div>
                                <button className='my-btn-one w-full' onClick={() => setFormStatus('confirm')}>Continue</button>
                            </div>
                        }

                        {/* confirm */}
                        {
                            formStatus === 'confirm' && <div>
                                <button type="submit" className='my-btn-one w-full' onClick={() => setFormStatus('')}>Submit</button>
                            </div>
                        }
                        <p>By continuing, you agree to our <span className='text-blue-300 hover:underline'>Term of services</span> & <span className='text-blue-300 hover:underline '>Privacy policy</span></p>
                    </form>
                </div>

                {/* banner right */}
                <div>
                    <img src={bannerImg} alt="" />
                </div>
            </div>

            <img src={bannerImgBg} className='absolute right-0 top-0 -z-30 opacity-50' />
        </div>
    );
};

export default Banner;