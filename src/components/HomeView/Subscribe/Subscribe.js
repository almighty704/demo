import React from 'react';
import './Subscribe.scss';
import arrow from '../../../images/arrow.svg';
import mailImg from '../../../images/email.svg';
const Subscribe = props => {
  return (
    <section className='subscribe '>
      <div className='subscribe__container d-flex justify-content-between container'>
        <div className='subscribe__container__left'>
          <span className='span-small'>SUBSCRIBE US</span>
          <h2>GET LATEST OFFERS</h2>
        </div>
        <div className='subscribe__container__right '>
          <form className='form form-controll d-flex justify-content-between'>
            <div className='form__flex'>
              <img className='form--img' src={mailImg} alt='alt' />
              <input
                className='form--input'
                type='text'
                placeholder='Get Lastest News...'
              />
            </div>
            <button className='form--btn'>
              <img src={arrow} alt='' />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
