import React from 'react';
import './About.scss';
const About = () => {
  return (
    <section className='about'>
      <div className='about__container container d-flex justify-content-between'>
        <div className='about__container__left'>
          <h2 className='text h2-about'>About</h2>
          <h2 className='text h2-logo'>
            <span className='h2-logo-yellow'>Sun</span>Tour
          </h2>
          <p className='parag'>
            Vestibulum tincidunt venenatis scelerisque. Proin quis enim lacinia,
            vehicula massa et, mollis urna. Proin nibh mauris, blandit vitae
            convallis at, tincidunt vel tellus. Praesent posuere nec lectus non
            cursus. Sed commodo odio et ipsum sagittis tincidunt non eget felis.
          </p>
          <div className='line'></div>

          <span className='font-parisiene'>Andrew McDonald</span>
        </div>
        <div className='about__container__right'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/mJhFtv5UTk8'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;
