import { Outlet } from "react-router-dom";
import Navbar from "../pages/Header/Navbar";
import Footer from "../pages/Header/Footer";



const Root = () => {
    return (
        <div className="max-w-6xl  mx-auto font-poppins mt-10">
           
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;