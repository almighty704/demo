import React from 'react';

const GalleryItem = props => {
  return (
    <div className='gallery__container__img'>
      {props.gallery.map(item => (
        <React.Fragment key={item.id}>
          <div
            className='gallery__container__img__item '
            style={{
              background: `url('${item.background}')`,
              width: `${item.width}px`,
            }}
          >
            <div className='filter'></div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default GalleryItem;
