import logo from '/public/assets/img/InGelt-white.png'
const Navbar = () => {
    return (
        <div className="flex justify-between py-3  bg-blue-500">
            <div className='max-w-7xl mx-auto'>
                <img src={logo} alt="" />
                <ul className='flex items-center gap-3'>
                    <li> Home </li>
                    <li> Home </li>
                    <li> Home </li>
                    <li> Home </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;