import React from "react";
import { hero } from "../data";
import '../index.css'
const Hero = () => {
  const { title, subtitle, compText, image } = hero;
  return (
    <>
      <section className="min-h-[900px] ">
        <div className="container mx-[10%] min-h-[900px] flex justify-center items-center">
          <div className="flex flex-col lg:gap-x-[30px] gap-y-[-20rem] lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left">
          
            <div className="flex-1">
              <h1 className="title mb-2 lg:mb-5"
              data-aos="fade-down"
              data-aos-delay="500"
              >{title}</h1>
              <p className="lead mb-5 lg:mb-10"
               data-aos="fade-down"
              data-aos-delay="600"
              >{subtitle}</p>
              <div className="flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6"
               data-aos="fade-down"
              data-aos-delay="700"
              >
                <button className="btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4 hover:bg-[#3C6EED]">
                  Try Free Now
                </button>
                <span className="text-light lg:lead lg:mb-0">{compText}</span>
              </div>
            </div>

            <div className="flex-1"
             data-aos="fade-up"
              data-aos-delay="800"
            >
              <img src={image} alt=""  className="w-[450px]"/>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
