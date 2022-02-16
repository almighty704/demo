import React from 'react';

const RecomendedItem = props => {
  return (
    <>
      {props.city.map(item => (
        <div
          className='recomended__container__img '
          style={{ background: `url(${item.url})` }}
          key={item.id}
        >
          <div className='recomended__container__img__background'>
            <div className='recomended__container__img__background__top '>
              <div className='recomended__container__img__background__top__left'>
                <h4 className='text text-color'>Start Per Night</h4>
                <span className='text text-price'>{item.price}$</span>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur.</p>
              </div>
              <div className='recomended__container__img__background__right'>
                <h4 className='text text-color-yellow'>Local </h4>
                <h4 className='text text-color-yellow'>Temperature</h4>
                <span className='text text-grade'>{item.temp}°C</span>
              </div>
            </div>
            <div className='recomended__container__img__background__bottom'>
              <div className='recomended__container__img__background__left'>
                <h4 className='text text-country'>{item.country}</h4>
                <h4 className='text text-city'>{item.city}</h4>
              </div>
              <div className='recomended__container__img__background__right'>
                <a href='/home' className='btn'>
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecomendedItem;
