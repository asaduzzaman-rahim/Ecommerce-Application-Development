import React from 'react'

const ServiceCart = ({ServiceImg, ServiceName, ServicePara}) => {
  return (
    <div className="px-[40px] py-[30px]  text-center" >
      <img className='h-[58px] w-[58px] mx-auto bg-black text-white rounded-full border-6 border-[#363738]  ' src={ServiceImg} alt="Icon Img" />
      <h5 className='pt-[24px] pb-[13px] text-[20px] font-semibold leading-[30px] tracking-tight '>{ServiceName}</h5>
      <p className='text-[14px]'>{ServicePara}</p>
    </div>
  )
}

export default ServiceCart


