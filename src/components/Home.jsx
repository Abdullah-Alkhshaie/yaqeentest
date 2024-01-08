import React, { useState } from "react";
import homeImage from "../images/Bg_home.webp";
import { AiFillAppstore } from "react-icons/ai";
// import Typist from "react-typist";
import ReactTyped from "react-typed";

function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-between px-10 lg:px-32 items-center">
      <div className="md:order-1">
        <img
          className="max-w-[100%] md:max-w-[500px] lg:max-w-[650px] "
          src={homeImage}
          alt="home"
        />
      </div>
      <div className="w-96 flex flex-col items-center mt-10 ">
        <h1 className="text-primary font-medium lg:text-5xl text-4xl leading-relaxed">
          في يقين{" "}
          <ReactTyped
            strings={[
              "نقدم الإستشارات التقنية",
              "نصنع تطبيقات تجعل حياتك أسهل",
              "نحول أفكارك إلى واقع",
              "نصنع مواقع إلكترونية تجعل حياتك أسهل",
            ]}
            typeSpeed={100}
            backSpeed={100}
            backDelay={4000}
            loop
          />
        </h1>

        <button className="mt-10 px-2 lg:px-6 flex items-center gap-3 py-3 lg:py-5 text-xl duration-300 rounded-lg outline-none bg-primary hover:bg-secondary text-white">
          تصفخ الخدمات <AiFillAppstore size={30} />
        </button>
      </div>
    </div>
  );
}

export default Home;
