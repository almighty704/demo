import React from 'react';

const CarouselItem = props => {
  return (
    <div className='hero__relative'>
      <div className='hero__text'>
        <span className='text  span-welcome'>Welcome to</span>
        <h1 className='text h1-title '>{props.title}</h1>
        <p className='text right-aligned'>Start per night {props.price}$</p>
      </div>
    </div>
  );
};

export default CarouselItem;
