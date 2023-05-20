import { Outlet } from "react-router-dom";
import BootstrapNavbar from "./components/ReactBootsrap/BootstrapNavbar";

const Layout = () => {
  return (
    <>
      <BootstrapNavbar />

      <Outlet />
    </>
  );
};

export default Layout;
