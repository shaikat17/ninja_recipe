import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";


const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default SharedLayout;