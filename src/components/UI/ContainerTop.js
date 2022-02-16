import React from 'react';
import './ContainerTop.scss';

const ContainerTop = props => {
  return (
    <div className='top container '>
      <div className='top__left'>
        <span className='top top--span'>{props.header}</span>
        <h2 className='top top--h2'>
          <span>{props.text} </span>
          {props.textSpan}
        </h2>
        <div className='top top--line'></div>
        <p className='top top--parag'>{props.parag}</p>
      </div>
      <div className='top__right'>
        <img src={props.image} alt='' />
      </div>
    </div>
  );
};

export default ContainerTop;
