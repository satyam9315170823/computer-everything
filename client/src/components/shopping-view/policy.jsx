import React from 'react'
import exchange_icon from "../../assets/exchange_icon.png";
import support_img from "../../assets/support_img.png";
import quality_icon from "../../assets/quality_icon.png";
const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      <div>
        <img src={exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Easy Exchange Policy</p>
        <p className=' text-gray-400'>We offer hassle free  exchange policy</p>
      </div>
      <div>
        <img src={quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>We Provide Best Quality Product</p>
        <p className=' text-gray-400'>We Source Our Product From The Best</p>
      </div>
      <div>
        <img src={support_img} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Best customer support</p>
        <p className=' text-gray-400'>Contact Us From Phone Number or Forms</p>
      </div>

    </div>
  )
}

export default OurPolicy