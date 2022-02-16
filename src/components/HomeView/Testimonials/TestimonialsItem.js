import React from 'react';

const TestimonialsItem = props => {
  return (
    <>
      {props.testimonials.map(item => (
        <div className='testimonials__container__card card' key={item.id}>
          <div
            className='card__img img_card_bg1'
            style={{ background: `url('${item.background}')` }}
          >
            <div
              className='card__img--avatar avatar_1'
              style={{ background: `url('${item.avatar}')` }}
            ></div>
          </div>
          <div className='card--content'>
            <h5 className='card_text'>
              <span className='card_text__span'>{item.firstName} </span>
              {item.lastName}
            </h5>
            <div className='card-content-img'>{item.stars}</div>
            <p className='card-parag'>{item.parag}</p>

            <a className='link' href='/'>
              Read More
            </a>
            <div className='line'></div>
            <div className='card-content-footer'>
              <div
                className='footer-img img_1'
                style={{ background: `url('${item.footerImg}')` }}
              ></div>
              <div
                className='footer-img img_2'
                style={{ background: `url('${item.footerImg}')` }}
              ></div>
              <div
                className='footer-img img_3'
                style={{ background: `url('${item.footerImg}')` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TestimonialsItem;
