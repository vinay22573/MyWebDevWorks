import React from 'react';
import Carousel from './Carousel';
import OurWorkCard from './OurWorkCard';

const OurWorkCardSlider = ({ cards }) => {
    const slides = cards.map((card) => <OurWorkCard key={card.id} card={card} />);

    return <Carousel slides={slides} />;
};

export default OurWorkCardSlider;
