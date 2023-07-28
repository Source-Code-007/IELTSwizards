import ServicesImg from '/public/assets/img/services/services.png'
import serviceIconOne from '/public/assets/img/services/serviceIconOne.svg'
import serviceIconTwo from '/public/assets/img/services/serviceIconTwo.svg'
import serviceIconThree from '/public/assets/img/services/serviceIconThree.svg'
import serviceIconFour from '/public/assets/img/services/serviceIconFour.svg'
import classCardBg from '/public/assets/img/classes/classCardBg.png'

const Services = () => {
    const services = [
        {
            icon: serviceIconOne,
            title: 'Accommodation',
            subTitle: ['20,000+ Listed Properties  across 5 countries.', '100+cities']
        },
        {
            icon: serviceIconTwo,
            title: 'Visa Application',
            subTitle: ['By Industry leading Immigration Consultants.', 'Quick & Hassle Free Visa Filing.']
        },
        {
            icon: serviceIconThree,
            title: 'Centralized Community',
            subTitle: ['Talk to international student community.', 'Ask your queries and doubts']
        },
        {
            icon: serviceIconFour,
            title: 'Education Loan',
            subTitle: ['100% Funding with quick loan sanction!', 'Pre-admission loan.']
        },
    ]

    return (
        <div className='bg-gradient-to-r from-[#001E43] to-[#570169] rounded-[105px] overflow-hidden'>
            <div className='grid grid-cols-1 md:grid-cols-2  items-center px-6 md:px-10 lg:px-16'>
                <div>
                    <img src={ServicesImg} className='md:w-[591px] md:h-[940.4px] py-8 md:py-0 md:relative top-[199px] left-0' />
                </div>
                <div>
                    <h2 className='my-title text-slate-50 mb-28 text-center'>Our Services</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-16'>
                        {
                            services.map((service, ind) => {
                                return <div key={ind} className='rounded-[40px] bg-[#0D1948] relative text-center text-white my-service '>
                                    <figure className='bg-[#FFFFFF] h-20 w-20 rounded-3xl flex items-center justify-center absolute left-10 -top-10'><img src={service.icon} /></figure>
                                    <div className='py-16 px-4 space-y-4'>
                                        <h2 className='text-[28px] font-semibold'>{service.title}</h2>
                                        <ul className='text-slate-200'>{service.subTitle.map((serviceSubtitle, ind) => <li key={ind}>{serviceSubtitle}</li>)}</ul>
                                    </div>
                                    <img src={classCardBg} className='absolute right-0 top-0 opacity-70' />
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;