import { FaMailBulk, FaPhone } from "react-icons/fa";
import SectionTitle from "../../HelpingCompo/SectionTitle";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
    return (
        <div className="pb-12 pt-20">
            <SectionTitle title={'Get in Touch with Us'} subTitle={'Elevate Your Institute Management and Student Success - Contact Us Now!'}></SectionTitle>

            <div className="rounded-l-3xl my-container grid grid-cols-1 md:grid-cols-2 items-center h-[700px] !px-0" style={{ boxShadow: '0px 5px 15px 0px rgba(0, 0, 0, 0.35)' }}>
                <div className="pl-20 space-y-4">
                    <h2 className="my-title">Contact Us</h2>
                    <p>Feel Free to contact us any time. We will get back to you as soon as we can!</p>
                    <form action="" className="">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" className="contact-us-inp" placeholder="John Doe" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" className="contact-us-inp" placeholder="John@gmail.com"/>
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" className="contact-us-inp" placeholder="Write your message"></textarea>
                        </div>
                    </form>
                </div>

                <div className="flex justify-end h-full relative">
                    <div className="bg-[#0064E1] w-[300px] h-full"></div>
                    <div className="bg-[#001E43] text-slate-100 space-y-4 px-12 pr-16 py-6 rounded-l-3xl w-[450px] h-[400px] flex flex-col justify-center absolute top-1/2 -translate-y-1/2 right-0">
                        <h2 className="my-subtitle !text-slate-50">Contact information</h2>
                        <p className="flex gap-3 items-center"> <span><FaPhone></FaPhone></span> +1012 3456 789</p>
                        <p className="flex gap-3 items-center"> <span><FaMailBulk></FaMailBulk></span> demo@gmail.com</p>
                        <p className="flex gap-3 items-center"> <span><FaLocationDot> </FaLocationDot></span> 132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;