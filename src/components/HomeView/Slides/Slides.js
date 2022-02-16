import React from 'react';
import './Slides.scss';
import SlidesItem from './SlidesItem';

const Slides = () => {
  return (
    <section className='slides'>
      <div className='slides__img img--1'>
        <SlidesItem price={120} temp={32} city='MILANO' country='ITALY' />
      </div>
      <div className='slides__img img--2'>
        <SlidesItem price={132} temp={27} city='PARIS' country='FRANCE' />
      </div>
      <div className='slides__img img--3'>
        <SlidesItem
          price={322}
          temp={37}
          city='MALDIVES'
          country='SOUTH ASIA'
        />
      </div>
      <div className='slides__img img--4'>
        <SlidesItem price={199} temp={36} city='HONOLULU' country='HAWAI' />
      </div>
    </section>
  );
};

export default Slides;
