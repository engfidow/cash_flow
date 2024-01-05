import React from "react";
import { overview } from "../data";

const Brands = () => {
  const { brands } = overview;
  return (
    <>
      <section className=" py-9">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6">
          {brands.map((brand, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={brand.delay}>
              <img src={brand.image} alt="" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Brands;
