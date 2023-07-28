import bannerImg from '/public/assets/img/banner/bannerRight.png'
import bannerImgBg from '/public/assets/img/banner/bannerImgBg.png'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import BannerFormStatusBtn from '../../../HelpingCompo/BannerFormStatusBtn';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// TODO: ul list disc modifiy
const Banner = () => {
    const [formStatus, setFormStatus] = useState('start')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [number, setNumber] = useState('')

    // submit
    const onSubmit = data => {

    };

    const isStartPass = watch('name') && number
    const isDetailsPass = watch('details') && watch('city')
    const isAllPass = isStartPass && isDetailsPass && watch('email') && watch('checkTerms')


    return (
        <div className="h-[93vh] relative overflow-hidden">
            <div className='h-full px-8 md:px-12 lg:px-16 grid grid-cols-2 items-center'>
                {/* banner left */}
                <div className='text-center space-y-4'>
                    <h2 className="text-[#001E43] text-xl md:text-3xl lg:text-5xl font-bold">Start Your IELTS Preparation <br /> And Get Desire Bands</h2>
                    <ul className='list-disc list-inside text-gray-700 inline-flex flex-col'>
                        <li>Get access to IELTS Centralised Library</li>
                        <li>British Council Certified Teacher</li>
                    </ul>

                    {/* form */}
                    <form onSubmit={handleSubmit(onSubmit)} className='rounded-[53px] py-6 px-12 w-[635px] mx-auto' style={{ boxShadow: '0px 4px 50px 0px #0D19481F' }}>

                        {/* status */}
                        <div className='flex justify-center gap-7 py-5'>
                            <BannerFormStatusBtn isActive={isStartPass} isCurrPage={formStatus === 'start'} number={1}>Start</BannerFormStatusBtn>
                            <BannerFormStatusBtn isActive={isDetailsPass} isCurrPage={formStatus === 'details'} number={2}>Fill Details</BannerFormStatusBtn>
                            <BannerFormStatusBtn isActive={isAllPass} isCurrPage={formStatus === 'confirm'} number={3}>Confirm</BannerFormStatusBtn>
                            {/* <span className='rounded flex gap-2 items-center'> {isStartPass ? <FaRegCheckCircle></FaRegCheckCircle> : <span className='text-slate-50 h-7 w-7 flex items-center justify-center p-2 rounded-full bg-slate-300'>1</span>} Start</span> */}
                        </div>

                        {/* Name and phone number */}
                        {formStatus === 'start' && <div className='space-y-8'>
                            <h2 className='my-subtitle text-left'>Free IELTS Classes</h2>
                            <input className='my-inp' {...register("name", { required: true })} placeholder='Enter your full name' />
                            {errors.name && <span className='text-red-500'>This field is required</span>}
                            {/* <div className='my-3 flex gap-3'>
                                <input className='my-inp !w-14' {...register("countryCode", { required: true })} placeholder='country' />
                                <input className='my-inp flex-1' {...register("number", { required: true })} placeholder='Phone number' />
                                {errors.number && <span className='text-red-500'>This field is required</span>}
                            </div> */}
                            <PhoneInput
                                country={'in'}
                                inputProps={{
                                    required: true,
                                }}
                                onChange={(e)=> setNumber(e)}

                            />
                            <button className={`my-btn-one w-full`} onClick={() => setFormStatus('details')}>Continue</button>
                        </div>}

                        {/* details */}
                        {
                            formStatus === 'details' && <div className='space-y-8'>
                                <h2 className='my-subtitle text-left'>Details</h2>

                                <input className='my-inp' {...register("details", { required: true })} placeholder='Details...' />
                                {errors.details && <span className='text-red-500'>This field is required</span>}
                                <input className='my-inp flex-1' {...register("city", { required: true })} placeholder='City..' />
                                {errors.city && <span>This field is required</span>}
                                <div className='flex gap-5'>
                                    <button className={`my-btn-one w-full`} onClick={() => setFormStatus('start')}>Previous</button>
                                    <button className='my-btn-one w-full' onClick={() => setFormStatus('confirm')}>Continue</button>
                                </div>
                            </div>
                        }

                        {/* confirm */}
                        {
                            formStatus === 'confirm' && <div className='space-y-8'>

                                <input className='my-inp flex-1' {...register("email", { required: true })} placeholder='email' />
                                {errors.email && <span className='text-red-500'>This field is required</span>}

                                <div className="flex items-center">
                                    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" {...register("checkTerms", { required: true })} />
                                    <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
                                </div>
                                {errors.checkTerms && <span className='text-red-500'>This field is required</span>}

                                <div className='flex gap-5'>
                                    <button className={`my-btn-one w-full`} onClick={() => setFormStatus('details')}>Previous</button>
                                    <button type="submit" disabled={!isAllPass} className={` ${isAllPass ? 'my-btn-one' : 'my-btn-one-disable'} w-full`} onClick={() => setFormStatus('success')}>Submit</button>
                                </div>
                            </div>
                        }

                        {/* success */}
                        {
                            isAllPass && formStatus === 'success' && <div className='h-[100px] flex items-center justify-center'>
                                <h2 className='my-title'>Yeeeh! Your form is submitted!</h2>
                            </div>
                        }

                        <p className='mt-6'>By continuing, you agree to our <span className='text-blue-300 hover:underline'>Term of services</span> & <span className='text-blue-300 hover:underline '>Privacy policy</span></p>
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