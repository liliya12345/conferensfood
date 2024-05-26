import React from "react";
import MyNavbar from "./MyNavbar";
import Footer from "./Footer";
import MySpiner from "./MySpiner";
import Copyright from "./Copyright";
import Search from "./Search";
import Hero from "./Hero";
import Features from "./Features";
import Shop from "./Shop";


export default function Home() {
  return (
    <>
    {/* <MySpiner/> */}
    
      <Search/>
      <Hero/>
      <Features/>
      <Shop/>
    </>
  );
}
