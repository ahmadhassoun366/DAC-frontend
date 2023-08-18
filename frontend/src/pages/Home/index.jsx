import React from "react";
import Hero from "./components/hero/hero";
import Services from "./components/services/index";
import Footer from "../../layout/footer-layout/footer";
import Header from "../../layout/header-layout/header";
import Partnetship from "./components/partnership/partnetship";
import Price from "./components/price/price";

const index = () => {
  return (
    <>
      <Header />
      <div className="">
        <Hero />
        <Partnetship />
        <Services />
        <Price />
      </div>
      <Footer />
    </>
  );
};

export default index;
