import moment from 'moment';
import newsLogo from '../../assets/logo.png'; 
const Navbar = () => {
    return (
        <div className='flex flex-col gap-6 items-center mt-10'>
            <div className='text-center space-y-3'>
                <img src={newsLogo} alt="" />
                <p className='font-semibold text-2xl text-gray-500'>Journalism Without Fear or Favour</p>
                <p className='font-semibold text-2xl text-gray-500'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
        </div>
    );
};

export default Navbar;