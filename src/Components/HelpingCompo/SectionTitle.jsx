
const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className='space-y-6 mt-2 mb-10 text-center w-5/6 md:w-4/6 mx-auto'>
                <h2 className='my-title lg:!text-[55px]'>{title}</h2>
            <p className='text-slate-700 text-xl md:text-2xl lg:text-[32px]'>{subTitle}</p>
        </div>
    );
};

export default SectionTitle;