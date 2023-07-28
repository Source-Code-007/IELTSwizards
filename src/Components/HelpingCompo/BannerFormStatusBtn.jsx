import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const BannerFormStatusBtn = ({ isActive, isCurrPage, number, children }) => {
    return (
        <button className={`flex items-center gap-2 text-lg ${isCurrPage? 'text-slate-900 font-semibold' : 'text-slate-700'}`}><span>
            {isActive ? (
                <FaCheckCircle></FaCheckCircle>
            ) : isCurrPage ?
                <FaRegCheckCircle></FaRegCheckCircle> :
                <span className='text-slate-50 h-5 w-5 flex items-center justify-center p-2 rounded-full bg-slate-300'>{number}</span>
            }
        </span>
            {children}
        </button>
    );
};

export default BannerFormStatusBtn;