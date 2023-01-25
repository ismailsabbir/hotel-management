import React from "react";
import { Outlet } from "react-router-dom";
import Bigfooter from "../Component/Bigfooter/Bigfooter";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Bigfooter></Bigfooter>
      <Footer></Footer>
    </div>
  );
};

export default Main;
