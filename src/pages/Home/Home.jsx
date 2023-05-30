import React from "react";
import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";

function Home() {
  document.title = "Plantique Store";
  return (
    <>
      <Slider />
      <Categories />
    </>
  );
}

export default Home;
