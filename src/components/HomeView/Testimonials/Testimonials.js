import React from 'react';
import ContainerTop from '../../UI/ContainerTop';
import TestimonialsItem from './TestimonialsItem';
import './Testimonials.scss';
import star from '../../../images/star.svg';
const Testimonials = () => {
  const testimonials = [
    {
      id: Math.random(),
      background:
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      avatar:
        'https://i.pinimg.com/280x280_RS/12/d1/6f/12d16fb4fa3060d253c7aaf54744e8e9.jpg',
      firstName: 'Nicole',
      lastName: 'Beck',
      stars: (
        <>
          <img src={star} alt='star' />
          <img src={star} alt='star' />
          <img src={star} alt='star' />
          <img src={star} alt='star' />
          <img src={star} alt='star' />
        </>
      ),
      parag:
        'Suspendisse blandit orci quis lorem eleifend maximus. Quisque nec mattis ante. Nam id ex id dui euismod volutpat et id quam. Fusce finibus accumsan tristique. Morbi id mauris massa.',
      footerImg:
        'https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    },
    {
      id: Math.random(),
      background:
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      avatar:
        'https://i.pinimg.com/280x280_RS/12/d1/6f/12d16fb4fa3060d253c7aaf54744e8e9.jpg',
      firstName: 'Nicole',
      lastName: 'Beck',
      stars: (
        <>
          <img src={star} alt='star' />
          <img src={star} alt='star' />
          <img src={star} alt='star' />
          <img src={star} alt='star' />
          <img src={star} alt='star' />
        </>
      ),
      parag:
        'Suspendisse blandit orci quis lorem eleifend maximus. Quisque nec mattis ante. Nam id ex id dui euismod volutpat et id quam. Fusce finibus accumsan tristique. Morbi id mauris massa.',
      footerImg:
        'https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    },
    {
      id: Math.random(),
      background:
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      avatar:
        'https://i.pinimg.com/280x280_RS/12/d1/6f/12d16fb4fa3060d253c7aaf54744e8e9.jpg',
      firstName: 'Nicole',
      lastName: 'Beck',
      stars: (
        <>
          <img src={star} alt='star' />
          <img src={star} alt='star' />
          <img src={star} alt='star' />
          <img src={star} alt='star' />
          <img src={star} alt='star' />
        </>
      ),
      parag:
        'Suspendisse blandit orci quis lorem eleifend maximus. Quisque nec mattis ante. Nam id ex id dui euismod volutpat et id quam. Fusce finibus accumsan tristique. Morbi id mauris massa.',
      footerImg:
        'https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    },
  ];

  return (
    <div className='container-fluid testimonials'>
      <ContainerTop
        header='HAPPY MEMORIES'
        text='OUR '
        textSpan='TESTIMONIALS'
      />
      <div className='testimonials__container d-flex justify-content-between container'>
        <TestimonialsItem testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Testimonials;
