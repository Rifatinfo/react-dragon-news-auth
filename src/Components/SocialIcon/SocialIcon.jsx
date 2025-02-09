import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const SocialIcon = () => {
    return (
        <div>
            <div className="join join-vertical w-full">
                <button className="btn join-item justify-start bg-gray-100 border-b-2"><FaFacebook/>FaceBook</button>
                <button className="btn join-item justify-start bg-gray-100 border-b-2"><FaTwitterSquare/>Twitter</button>
                <button className="btn join-item justify-start bg-gray-100 border-b-2"><FaLinkedin/>LinkedIn</button>
            </div>
        </div>
    );
};

export default SocialIcon;