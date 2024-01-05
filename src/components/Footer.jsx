import React from "react";
import logo1  from "../assets/logo.png";
import { footer } from "../data";
import Copyright from "./Copyright";
const Footer = () => {
  const { logo, links, legal, newsletter, form } = footer;
  return (
    <footer className="pt-[142px] pb-[60px]" data-aos='fade-up' data-aos-delay='200'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8">
          {/* logo */}
          <div >
          <a href="/" className="flex ">
          <img src={logo1} alt='logo' className='w-9 h-9 object-contain cursor-pointer mb-3 mr-4' />
          <p className='text-[#00C957] text-[25px] font-bold  flex gap-2 mt-2'>
            Cash 
            <span className="text-[#3226AE]">Flow</span>
          </p>
          </a>
          
          </div>
          {/* list 1 */}
          <div className="">
            <div className="text-2xl uppercase font-medium mb-6">Links</div>
            <ul className="flex flex-col gap-y-3">
              {links.map((item, index) => {
                const { href, name } = item;
                return (
                  <li key={index}>
                    <a
                      href={href}
                      className="font-medium hover:text-[#3226AE] transition"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* list 2 */}
          <div className="">
            <div className="text-2xl uppercase font-medium mb-6">Legal</div>
            <ul className="flex flex-col gap-y-3">
              {legal.map((item, index) => {
                const { href, name } = item;
                return (
                  <li key={index}>
                    <a
                      href={href}
                      className="font-medium hover:text-[#3226AE] transition"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* news latter */}
          <div className="">
            <div className="text-2xl uppercase font-medium mb-6">{newsletter.title}</div>
            <div className="text-xl text-light mb-[18px]">{newsletter.subtitle}</div>
            {/* form */}
            <form className="max-w-[349px] mb-[10px]">
              <div
                className="h-[62px] p-[7px] flex border border-dark rounded-lg"
              >
                <input
                  className="w-full h-full pl-6 border-none outline-none placeholder:text-light"
                  type="text"
                  placeholder={form.placeholder}
                />
                <button className="btn btn-sm w-[102px] bg-[#3226AE] text-white hover:bg-[#3C6EED] transition-all"> {form.btnText} </button>
              </div>
            </form>
            <span className="text-sm text-light">{form.smallText}</span>
          </div>
        </div>
        <hr className="mt-10 mb-5"/>
        <Copyright/>
      </div>
    </footer>
  );
};

export default Footer;
