import React from 'react'
import OurWorkCardSlider from '@/components/OurWorkCardSlider'
import {OurWorkCards} from '@/data/OurWorkCards'
function OurWrkCrdSlider() {
  return (
    <div className='mt-25 w-full  pb-2 md:balanced-width md:w-[840px] mx-auto rounded-lg overflow-hidden  relative z-0 bg-slate-300 '>
        <OurWorkCardSlider cards={OurWorkCards} />
    </div>
  )
}

export default OurWrkCrdSlider