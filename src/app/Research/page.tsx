"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import OurWorkCardSlider from '@/components/OurWorkCardSlider'
import {OurWorkCards} from '@/data/OurWorkCards'


function Research() {
  return (
    <main className="relative w-full bg-slate-950 text-white">
      <section className="h-[10vh] lg:h-[20vh] bg-slate-950 "></section>
      <section className="w-full  pb-6">
        <div className="mb-8">
          <h1 className="py-5 text-white text-center font-poppins text-4xl md:text-5xl max-md:font-bold font-semibold max-md:tracking-wide leading-normal self-stretch bg-gray-950">
            Our <span className="text-[#9961D9]">Work</span>
          </h1>
        </div>
        {/* Our Work Card */}
        <div className="w-full pb-2 max-md:px-1 md:balanced-width md:w-[840px] mx-auto rounded-xl overflow-hidden bg-slate-100 relative z-0 border-b-4 border-b-slate-300 border-t-2 border-r-2 border-r-slate-300 border-t-purple-500">
        <OurWorkCardSlider cards={OurWorkCards} />
        </div>
      </section>
      <section className="w-full ">
        <div className="mb-8">
        <h1 className="py-5 text-white text-center font-poppins text-4xl md:text-5xl max-md:font-bold font-semibold max-md:tracking-wide leading-normal self-stretch bg-gray-950">
            Future<span className="text-[#9961D9]"> Publications</span>
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-10 sm:gap-8 items-center justify-center p-2 pb-10 w-full">
          {/* First Publication Card */}
          <div className="w-full sm:w-[360px] p-8 flex flex-col items-center space-y-5 text-white bg-[#130930] rounded-2xl">
            <div className="flex flex-col rounded-2xl ">
              <img className="object-cover w-full aspect-[3/2] rounded-2xl" src="/assets/brain1small.jpg" alt="Mindful Technology Development" />
            </div>
            <h2 className="text-[#9961D9] text-center font-poppins text-xl font-bold leading-normal capitalize px-10 py-2">Mindful Technology Development</h2>
            <p className="text-center px-8">
              Crafting AI-driven solutions to enhance mindfulness in everyday interactions.
            </p>
            <Link href='https://vinay.com' className="p-[3px] relative mb-3">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-lg" />
              <div className="text-base font-poppins font-semibold px-4 py-2 bg-[#10072B] rounded-[4px] relative group transition duration-200 text-white">
                Read more
              </div>
            </Link>
          </div>

          {/* Second Publication Card */}
          <div className="w-full sm:w-[360px] p-8 flex flex-col items-center space-y-5 text-white bg-[#130930] rounded-2xl">
            <div className="flex flex-col rounded-2xl ">
              <img className="object-cover w-full aspect-[3/2] rounded-2xl" src="/assets/image2small.jpg" alt="Mindful Technology Development" />
            </div>
            <h2 className="text-[#9961D9] text-center font-poppins text-xl font-bold leading-normal capitalize px-10 py-2">Mindful Technology Development</h2>
            <p className="text-center px-8">
              Crafting AI-driven solutions to enhance mindfulness in everyday interactions.
            </p>
            <a href='https://vinay.com' className="p-[3px] relative mb-3">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-lg" />
              <div className="text-base font-poppins font-semibold px-4 py-2 bg-[#10072B] rounded-[4px] relative group transition duration-200 text-white">
                Read more
              </div>
            </a>
          </div>

          {/* Third Publication Card */}
          <div className="w-full sm:w-[360px] p-8 flex flex-col items-center space-y-5 text-white bg-[#130930] rounded-2xl">
            <div className="flex flex-col rounded-2xl ">
              <img className="object-cover w-full aspect-[3/2] rounded-2xl" src="/assets/brain3small.jpg" alt="Mindful Technology Development" />
            </div>
            <h2 className="text-[#9961D9] text-center font-poppins text-xl font-bold leading-normal capitalize px-10 py-2">Mindful Technology Development</h2>
            <p className="text-center px-8">
              Crafting AI-driven solutions to enhance mindfulness in everyday interactions.
            </p>
            <a href='https://vinay.com' className="p-[3px] relative mb-3">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-lg" />
              <div className="text-base font-poppins font-semibold px-4 py-2 bg-[#10072B] rounded-[4px] relative group transition duration-200 text-white">
                Read more
              </div>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Research;
