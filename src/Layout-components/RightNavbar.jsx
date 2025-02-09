import SocialIcon from "../Components/SocialIcon/SocialIcon";
import SocialLogin from "../Components/SocialLogin/SocialLogin";


const RightNavbar = () => {
    return (
        <div>
            <p className="font-semibold mb-3">Login With</p>
            <SocialLogin/>
            <p className="mt-3 mb-3">Find Us On</p>
            <SocialIcon/>
        </div>
    );
};

export default RightNavbar;