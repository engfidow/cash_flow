import React from 'react';
import { copyright } from "../data"
const Copyright = () => {
  const {link1, link2, copyText,social} = copyright;
  return (
    <div className="flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between">
      <div className="flex gap-x-6">
        <a className='hover:text-[#3226AE] transition'  href={link1.href}>{link1.name}</a>
        <a className='hover:text-[#3226AE] transition' href={link2.href}>{link2.name}</a>
      </div>
      {/* copyright text */}
      <div className="">{copyText}</div>
       {/* social icons */}
      <ul className="flex gap-x-[12px]">
        {social.map((item, index) => {
          const {href, icon} = item;
          return (
            <li key={index}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt="" />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Copyright;
