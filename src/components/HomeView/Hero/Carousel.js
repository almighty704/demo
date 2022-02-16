import React, { useState } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import CarouselItemText from './CarouselItem';
import './Carousel.scss';
const HeroSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className='hero container-max'>
      <Carousel className=' ' activeIndex={index} onSelect={handleSelect}>
        <CarouselItem>
          <div className='img image--first d-block w-100 ' alt='First slide'>
            <CarouselItemText title='Dubai' price='99,9' />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='img image--second d-block w-100' alt='Second slide'>
            <CarouselItemText title='China' price='279,9' />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='img image--third d-block w-100' alt='Third slide'>
            <CarouselItemText title='Doha' price='88,9' />
          </div>
        </CarouselItem>
      </Carousel>
    </section>
  );
};

export default HeroSection;
