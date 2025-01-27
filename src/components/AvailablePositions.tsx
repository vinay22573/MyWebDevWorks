import React from 'react';
import { AvailablePositions, Position } from '../data/positions';
import '@/styles/positions-card.css';
function AvailablePositionsSection() {
  return (
    <div className="bg-gray-300 w-full">
      <div className="flex bg-[#130930] flex-col sm:flex-row gap-10 sm:gap-6 items-center justify-center p-2 mb-10 w-full">
        {AvailablePositions.map((position: Position) => (
          <article
            key={position.id}
            className="max-sm:w-full sm:w-[280px] sm:min-w-[280px] px-8 py-5 flex flex-col items-center gap-10 text-white rounded-2xl card__article"
          >
            <div className="lg:card__scale-1"></div>
            <div className="lg:card__scale-2"></div>
            <div className="relative z-[120] w-full flex flex-col gap-5 rounded-xl">
              <h2 className="text-xl text-[#9961D9] px-6 font-bold text-center font-poppins tracking-wide">
                {position.title}
              </h2>
              <div className="flex flex-col gap-2 text-left text-white">
                <div>
                  <h3 className="text-lg font-semibold tracking-wider">Description:</h3>
                  <p className="text-sm tracking-tight">{position.description}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-wider">Qualification:</h3>
                  <p className="text-sm tracking-tight">{position.qualification}</p>
                </div>
              </div>
            </div>
            <a href={position.learnMoreLink} className="p-[1.5px] relative mb-3">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-2xl" />
              <div className="text-base font-poppins font-normal px-4 py-2 bg-[#10072B] rounded-[16px] relative group transition duration-200 text-white">
                Apply now
              </div>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

export default AvailablePositionsSection;
