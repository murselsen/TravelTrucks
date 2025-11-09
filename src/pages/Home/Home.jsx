import React from "react";

import Css from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";

export const Home = () => {
  return (
    <div className={Css.HomeArea}>
      <Navbar />
      <div className={Css.HomeImage} />
      <div className={Css.HomeContent}>
        <h1 className={Css.Title}>Campers of your dreams</h1>
        <h2 className={Css.SubTitle}>
          You can find everything you want in our catalog
        </h2>
        <a href="/catalog" className={Css.Btn}>
          View Now
        </a>
      </div>
    </div>
  );
};

export default Home;
