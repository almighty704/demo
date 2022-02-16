import React from 'react';
import locationImg from '../../../images/Location.svg';
const RecomendedHotelsItem = props => {
  return (
    <>
      {props.recomendedOne.map(item => (
        <div className='recomended-hotels__container__content' key={item.id}>
          <div className='recomended-hotels__container__content__left'>
            <h4 className='name'>{item.hotelName}</h4>
            <div className='stars'> {item.stars}</div>
            <span className='price'>${item.price} per night</span>
            <p className='parag'>{item.description}</p>

            <div className='links'>
              <a className='link link-blue' href='/'>
                Read More
              </a>
              <a className='link link-bgyellow' href='/'>
                Read More
              </a>
            </div>
          </div>
          <div
            className='recomended-hotels__container__content__right'
            style={{ background: `url('${item.image}')` }}
          >
            {item.discount}

            <div className='addres'>
              <img src={locationImg} alt='' />
              <span>
                {item.city}, {item.country}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecomendedHotelsItem;
