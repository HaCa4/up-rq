import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div
      style={{
        maxHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        padding: "3rem",
        alignItems: "center",
        backgroundColor: "rgb(203,213,225)",
        position: "relative",
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
