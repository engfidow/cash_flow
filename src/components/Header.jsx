import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../data";
import logo  from "../assets/logo.png";
import menu  from "../assets/menu.svg";
import close  from "../assets/close.svg";
const Header = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20  ${
        scrolled ? "bg-white/10 backdrop-blur-xl dark:bg-[#dee0e751] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-[8%]'>
        <Link
          to='/'
          className='flex items-center gap-2 text-center'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain cursor-pointer mb-3 ' />
          <p className='text-[#00C957] text-[25px] font-bold  flex gap-2 '>
            Cash 
            <span className="text-[#3226AE]">Flow</span>
          </p>
        </Link>

        <ul className='hidden lg:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-[#3226AE]" : "text-[#292830]"
              } hover:text-[#3226AE] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

       



        <a href="/login">
          <button type="button" className="text-[#3C6EED] bg-transparent hover:bg-[#3226AE] hover:text-[#ffff] ease-out duration-300 border-[#3C6EED] border-2 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 drop-shadow-2xl  md:block hidden md:ml-44">Login Now</button>
        </a>
        <div className='lg:hidden  flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain text-black'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white shadow-2xl absolute top-20 right-0 mx-4 my-2 min-w-[340px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-center items-center flex-1 flex-col gap-4'>
            
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium mb-7 cursor-pointer text-[25px] ${
                    active === nav.title ? "text-[#3226AE]" : "text-[#292830]"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className="hover:text-[#3226AE]">{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;



