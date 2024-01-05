import React from "react";
import { testimonials } from "../data";
import ClientSlider from "./ClientSlider";
const Testimonials = () => {
  // destructure testimonials
  const {title, clients} = testimonials;
  return (
    <section className="section">
      <div className="container mx-auto">
        {/* title */}
        <h2 className="title mb-10 1g:mb-20 text-center max-w-[920px] mx-auto"
        data-aos='fade-up' data-aos-delay='200'
        >
          {title}
        </h2>
        {/* slider */}
        <div data-aos='fade-up' data-aos-delay='400'>
          <ClientSlider clients={clients} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
