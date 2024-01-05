import React from 'react'
import {PiBuildingsFill} from "react-icons/pi";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';

const ContactInfo = () => {
  return (
    <div className='mx-[10%] lg:flex flex-row  items-center justify-center'>
    
      <div className="bg-white flex flex-col justify-center items-center mx-auto px-[65px] py-8 text-center rounded-[12px] cursor-pointer  transition-all shadow-sm">
        <div className="bg-[#3226AE] rounded-full p-5 mb-7">
            <PiBuildingsFill className='text-white'/>
        </div>
        <h1 className='h2 text-[20px]'>Company information</h1>
        <p className='text[15px] text-light'>Cash Folow</p>

      </div>


      <div className="bg-white flex flex-col justify-center items-center mx-auto px-[65px] py-8 text-center rounded-[12px] cursor-pointer  transition-all shadow-sm">
        <div className="bg-[#00C957] rounded-full p-5 mb-7">
            <FaMapMarkerAlt className='text-white'/>
        </div>
        <h1 className='h2 text-[20px]'>Address</h1>
        <p className='text[15px] text-light'>Hodan District,<br/> Mogadishu, Somalia</p>

      </div>



      <div className="bg-white flex flex-col justify-center items-center mx-auto px-[65px] py-8 text-center rounded-[12px] cursor-pointer  transition-all shadow-sm">
        <div className="bg-[#3C6EED] rounded-full p-5 mb-7">
            <IoIosCall className='text-white'/>
        </div>
        <h1 className='h2 text-[20px]'>Contact us</h1>
        <p className='text[15px] text-light'>+252 617458945</p>
        <p className='text[15px] text-light'>support.cashflow.com</p>

      </div>
      
    </div>
  )
}

export default ContactInfo;
