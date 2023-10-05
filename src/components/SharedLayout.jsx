import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
