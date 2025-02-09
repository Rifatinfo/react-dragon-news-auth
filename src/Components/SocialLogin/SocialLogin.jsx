import { FaGoogle , FaGithub} from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="space-y-2">
            <button className="btn w-full rounded-md"><FaGoogle/>Login With Google</button>
            <button className="btn w-full rounded-md"><FaGithub/>Login With GitHub</button>
        </div>
    );
};

export default SocialLogin;