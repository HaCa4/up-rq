import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { InitialState } from "../utils/types/inRedux";
import Navbar from "./Navbar";

const Layout = () => {
  let isLoading = useSelector((state: InitialState) => state.reducer.isLoading);
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
      {isLoading ? <div className="fixed z-10 right-2 top-2">Loading</div> : null}
    </div>
  );
};

export default Layout;
