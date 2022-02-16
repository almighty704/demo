import React from 'react';
import tourist from '../../../images/Tourist-PNG-Photo.png';
import './Destionation.scss';
const Destination = () => {
  return (
    <div className='destination'>
      <div className='destination__container container'>
        <div className='destination__container__left'>
          <span className='text text-yellow'>SPECIAL OFFERS</span>
          <h2 className='text h2-big'>
            <span> POPULAR</span> DESTINATIONS
          </h2>
          <div className='line'></div>
          <p className='text parag'>
            Nullam ac dolor id nulla finibus pharetra. Sed sed placerat mauris.
            Pellentesque lacinia imperdiet interdum. Ut nec nulla in purus
            consequat lobortis. Mauris lobortis a nibh sed convallis
          </p>
        </div>
        <div className='destination__container__right'>
          <img src={tourist} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Destination;
