import React from 'react';
import ContainerTop from '../../UI/ContainerTop';
import RecomendedHotelsItem from './RecomendedHotelsItem';
import star from '../../../images/star.svg';

import './RecomendedHotels.scss';

const recomendedOne = [
  {
    id: Math.random(),
    hotelName: 'Hotel Gramshi',
    stars: (
      <>
        <img src={star} alt='mondi' />
        <img src={star} alt='mondi' />
        <img src={star} alt='mondi' />
        <img src={star} alt='mondi' />
      </>
    ),
    price: 98,
    description: 'Quisque egestas a est in convallis. Maecenas pellentesque.',
    image:
      'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
    discount: <span className='span-discount'>20%</span>,

    city: 'Gramsh',
    country: 'Albania',
  },
  {
    id: Math.random(),
    hotelName: 'Hotel Gramshi',
    stars: (
      <>
        <img src={star} alt='mondi' />
        <img src={star} alt='mondi' />
        <img src={star} alt='mondi' />
        <img src={star} alt='mondi' />
      </>
    ),
    price: 98,
    description: 'Quisque egestas a est in convallis. Maecenas pellentesque.',
    image:
      'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',

    city: 'Gramsh',
    country: 'Albania',
  },
];

const RecomendedHotels = () => {
  return (
    <section className='recomended-hotels '>
      <ContainerTop
        header='Top Rated'
        text='Recomended'
        textSpan='Hotels'
        parag='  Vestibulum feugiat vitae tortor ut venenatis. Sed cursus, purus eu
          euismod bibendum, diam nisl suscipit odio, vitae ultrices mauris dolor
          quis mauris. Curabitur ac metus id leo maximus porta.'
      />

      <div className='recomended-hotels__container container'>
        <RecomendedHotelsItem recomendedOne={recomendedOne} />
      </div>
      <div className='recomended-hotels__container container'>
        <RecomendedHotelsItem recomendedOne={recomendedOne} />
      </div>

      <div className='recomended-hotels__container container'>
        <RecomendedHotelsItem recomendedOne={recomendedOne} />
      </div>
    </section>
  );
};

export default RecomendedHotels;
