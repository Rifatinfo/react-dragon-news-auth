import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const NewsButton = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
          <div className="flex items-center gap-6 bg-gray-200 p-2 font-semibold">
          <button className="btn btn-error">Latest</button>
      <Marquee pauseOnHover={true}>
        <Link>
          <div>
            <div>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corporis libero eaque sint voluptatibus quas debitis illum, repellat aut nobis doloremque mollitia aliquam natus officiis nulla, atque totam ipsa amet!
              </p>
            </div>
          </div>
        </Link>
      </Marquee>
          </div>
    </div>
  );
};

export default NewsButton;
