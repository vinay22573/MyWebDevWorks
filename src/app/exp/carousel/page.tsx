'use client';
import React from 'react'
import ImageSlider from '@/components/ImageSlider';
import { div } from 'framer-motion/client';
const IMAGES = [
  { url: '/images/Car1.jpg', alt: 'Car 1' },
  { url: '/images/Car2.jpg', alt: 'Car 2' },
  { url: '/images/Car3.jpg', alt: 'Car 3' }
]
function page() {
  return (
    <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        aspectRatio: "11 / 5",
        width: "100%",
    }}>
        <ImageSlider images={IMAGES}/>
    </div>
  )
}

export default page