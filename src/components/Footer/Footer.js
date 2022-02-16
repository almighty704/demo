import React from 'react';
import './Footer.scss';

import twitter from '../../images/twiter.png';
import fb from '../../images/fb.png';
import google from '../../images/gog.png';
import inImg from '../../images/in.png';

const footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__filter'>
        <div className='footer__container container d-flex justify-content-between '>
          <div className='footer__container--left '>
            <div className='footer-flex  d-flex justify-content-between '>
              <div className='footer-flex-logo'>
                <h2 className='footer-flex__h2'>
                  <span className='text__span'>Sun</span>Tour
                </h2>
                <div className='line'></div>
              </div>
              <div className='icons '>
                <img src={twitter} alt='' />
                <img src={fb} alt='' />
                <img src={google} alt='' />
                <img src={inImg} alt='' />
              </div>
            </div>
            <p className='parag'>
              Vestibulum tincidunt venenatis scelerisque. Proin quis enim
              lacinia, vehicula massa et, mollis urna. Proin nibh mauris,
              blandit vitae convallis at, tincidunt vel tellus. Praesent posuere
              nec lectus non cursus.
            </p>

            <div className='links__footer'>
              <a href='/' className='link_1'>
                Home
              </a>
              <a href='/' className='link'>
                About
              </a>
              <a href='/' className='link'>
                Tours
              </a>
              <a href='/' className='link'>
                Hotels
              </a>
              <a href='/' className='link'>
                Blog
              </a>
              <a href='/' className='link'>
                Contacts
              </a>
            </div>

            <div className='line'></div>
            <p className='copyright'>
              Copyright © SunTour. 2022. All Right Reserved
            </p>
          </div>

          <div className='footer__container--right '>
            <div className='footer-contacts'>
              <p className='location'>
                <img src='./assets/Location.svg' alt='' />
                7706 Lake Street, Jacksonville Beach, FL 32250
              </p>
              <span className='phone'>
                <img src='./assets/phone.svg' alt='' />
                (207)-675-9713
              </span>
              <a className='d-flex' href='/#'>
                <img src='./assets/mail.svg' alt='' />{' '}
                support.suntour@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
