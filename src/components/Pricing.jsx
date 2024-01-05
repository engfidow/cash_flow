import React, { useState } from "react";
import { pricing } from "../data";
import { HiCheck, HiOutlineArrowRight } from "react-icons/hi";
const Pricing = () => {
  const { title, cards } = pricing;
  const [index, setIndex] = useState(1);
  return (
    <>
      <section className="section">
        <div className="containerv mx-[10%]">
          <h2 className="h2 mb-10 lg:mb-20 text-center">{title}</h2>

          <div className="flex flex-col lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 justify-center items-center">
            {cards.map((card, cardIndex) => {
              const {
                icon,
                title,
                services,
                price,
                userAmount,
                btnText,
                delay,
              } = card;
              return (
                
                  <div key={cardIndex}>
                    <div
                      onClick={() => setIndex(cardIndex)}
                      className={` ${cardIndex === index 
                          ? "bg-white shadow-2xl"
                          : "border border-grey"
                      } h-[500px] rounded-[12px] p-[40px] cursor-pointer transition-all`}>
                      {/* card icon */}
                      <div className="mb-8">
                        <img src={icon} alt="" />
                      </div>
                      {/* card title */}
                      <div className="text-[32px] font-semibold mb-8">
                        {title}
                      </div>
                      {/* card service */}
                      <div className="flex flex-col gap-y-2 mb-6">
                      {services.map((service, index) => {
                        // destructure service
                        const {name} = service;
                        return(
                          <div className="flex items-center gap-x-[10px]" key={index}>
                            <HiCheck className='text-light' />
                            <div>{name}</div>
                          </div>
                        );
                      })}
                      </div>
                      <div className="mb-10">
                        <div className="">
                          <span className="text-2xl font-semibold">{price}/</span>
                          <span className="text-xl text-light font-light">year</span>
                        </div>
                        <div className="text-base text-light">
                          {userAmount}
                        </div>
                      </div>
                      <button className="btn btn-sm bg-[#3226AE] text-white hover:bg-[#3C6EED] transition-all">
                        {btnText}
                        <HiOutlineArrowRight className="ml-2" />
                      </button>
                    </div>
                  </div>
                
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
