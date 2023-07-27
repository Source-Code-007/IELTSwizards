import classOne from '/public/assets/img/classes/class-1.svg'
import classTwo from '/public/assets/img/classes/class-2.svg'
import classThree from '/public/assets/img/classes/class-3.svg'
import classCardBg from '/public/assets/img/classes/classCardBg.png'

const ClassesSection = () => {
    const classes = [
        {
            img: classOne,
            title: 'Free IELTS Modules',
            subTitle: '20,000+ Listed Properties  across 5 countries.',
        },
        {
            img: classTwo,
            title: 'Offline Classes',
            subTitle: '20,000+ Listed Properties  across 5 countries.',
        },
        {
            img: classThree,
            title: 'Live / Online Classes',
            subTitle: '20,000+ Listed Properties  across 5 countries.',
        }
    ]

    return (
        <div className='my-container my-16'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12'>
                {
                    classes.map((classP, ind) => {
                        return <div key={ind} className='rounded-[40px] bg-[#0D1948] p-5 relative text-center text-white space-y-4' style={{ boxShadow: '0px 4px 60px 0px #0D194870' }}>
                            <figure className='bg-[#FFFFFF] h-20 w-20 rounded-full flex items-center justify-center mx-auto'><img src={classP.img} /></figure>
                            <h2 className='text-[28px] font-semibold'>{classP.title}</h2>
                            <p className='text-slate-400'>{classP.subTitle}</p>
                            <img src={classCardBg} className='absolute right-0 top-0 opacity-70' />
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default ClassesSection;