import React from 'react';

const BlogItem = props => {
  return (
    <div className='blog__container__carousel d-flex'>
      <div className='blog__container__carousel__img'>
        <div className='filter'></div>
      </div>
      <div className='blog__container__carousel__text'>
        <span className='text  span-header'>{props.header}</span>
        <p className='text p-date '>{props.date}</p>
        <p className='text p-text'> {props.parag}</p>

        <a className='link' href='/'>
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogItem;
