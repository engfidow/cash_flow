import React from "react";
import { features } from "../data";
import { HiOutlineArrowRight } from "react-icons/hi";
const Feature2 = () => {
  const { feature2 } = features;
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature2;
  return (
    <>
      <section className="section">
        <div className="container mx-[10%]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]">
          <div className="flex-1 order-2 lg:order-1"  data-aos="fade-right" data-aos-offset="400">
              <img src={image} alt=""  />
            </div>
            <div className="flex-1 order-1 lg:order-2" data-aos="fade-left" data-aos-offset="300">
              <div className="pretitle">{pretitle}</div>
              <h2 className="title mr-28">{title}</h2>
              <p className="lead mr-28">{subtitle}</p>
              <button className=" btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all ">
                {btnLink}  <HiOutlineArrowRight className="ml-2" />
              </button>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature2;
