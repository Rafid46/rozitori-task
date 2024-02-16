import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="font-kumbh mt-7">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
