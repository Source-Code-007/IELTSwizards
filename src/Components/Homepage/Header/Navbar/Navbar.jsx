import logo from '/public/assets/img/InGelt-white.png'
const Navbar = () => {
    return (
        <div className="bg-[#051C45]">
            <div className='flex justify-between py-2 px-8 md:px-12 lg:px-16'>
                <img src={logo} alt="IELTS wizards" className='h-14 w-14'/>
                <ul className='flex items-center gap-3 text-white'>
                    <li className='cursor-pointer hover:text-orange-500 transition duration-500'> Home </li>
                    <li className='cursor-pointer hover:text-orange-500 transition duration-500'> About </li>
                    <li className='cursor-pointer hover:text-orange-500 transition duration-500'> Contact </li>
                    <li className='cursor-pointer hover:text-orange-500 transition duration-500'> Services </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;