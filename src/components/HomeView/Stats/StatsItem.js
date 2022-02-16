import React from 'react';
const AboutItem = props => {
  return (
    <>
      {props.stats.map(stat => (
        <React.Fragment key={stat.id}>
          <div className='stats__container__item  d-flex justify-content-between'>
            <img src={stat.img} alt='' />
            <div className='stats__container__item__flex '>
              <h4> {stat.amount}</h4>
              <span>{stat.name}</span>
            </div>
          </div>
          <div className='stats__container__line'>
            <img src={stat.line} alt='' />
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default AboutItem;
