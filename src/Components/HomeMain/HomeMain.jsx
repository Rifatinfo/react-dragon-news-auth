import LeftNavbar from "../../Layout-components/LeftNavbar";
import MiddleNavbar from "../../Layout-components/MiddleNavbar";
import RightNavbar from "../../Layout-components/RightNavbar";
import Header from "../Navbar/Header/Header";
import Navbar from "../Navbar/Navbar";

const HomeMain = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar/>
            <Header/>
            <div className="md:flex gap-4 border">
                <aside className="w-full md:w-1/4 border">
                  <LeftNavbar></LeftNavbar>
                </aside>
                <section className="w-full md:w-3/5 border h-50">
                   <MiddleNavbar/>
                </section>
                <aside className="w-full md:w-1/4 border h-50">
                   <RightNavbar></RightNavbar>
                </aside>
            </div>
        </div>
    );
};

export default HomeMain;