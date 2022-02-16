import React from 'react';

const SlidesItem = props => {
  return (
    <div className='slides__img__container'>
      <div className='slides__img__container__top '>
        <div className='slides__img__container__top__left'>
          <h4 className='text text-color'>Start Per Night</h4>
          <span className='text text-price'>{props.price}$</span>
          <p>Lorem Ipsum Dolor Sit Amet Consectetur.</p>
        </div>
        <div className='slides__img__container__top__right'>
          <h4 className='text text-color-yellow'>Local </h4>
          <h4 className='text text-color-yellow'>Temperature</h4>
          <span className='text text-grade'>{props.temp}°C</span>
        </div>
      </div>
      <div className='slides__img__container__bottom'>
        <div className='slides__img__container__bottom__left'>
          <h4 className='text text-country'>{props.country}</h4>
          <h4 className='text text-city'>{props.city}</h4>
        </div>
        <div className='slides__img__container__bottom__right'>
          <a href='/home' className='btn'>
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default SlidesItem;
