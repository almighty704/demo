import React from 'react';
import ContainerTop from '../../UI/ContainerTop';
import './Gallery.scss';
import image from '../../../images/camera.svg';
import GalleryItem from './GalleryItem';
const Gallery = () => {
  const gallery = [
    {
      id: Math.random(),
      background:
        'https://images.unsplash.com/photo-1609788077750-8cad3315eead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      width: 580,
    },
    {
      id: Math.random(),
      background:
        'https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      width: 285,
    },
    {
      id: Math.random(),
      background:
        'https://images.unsplash.com/photo-1568402102990-bc541580b59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      width: 285,
    },
  ];

  const gallerySecond = [
    {
      id: Math.random(),
      background:
        'https://images.unsplash.com/photo-1528702748617-c64d49f918af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      width: 285,
    },
    {
      id: Math.random(),
      background:
        'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
      width: 285,
    },
    {
      id: Math.random(),
      background:
        'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      width: 285,
    },
    {
      id: Math.random(),
      background:
        'https://images.unsplash.com/photo-1506125840744-167167210587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80',
      width: 285,
    },
  ];

  const galleryThird = [
    {
      id: Math.random(),
      background:
        'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      width: 285,
    },
    {
      id: Math.random(),
      background:
        'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      width: 285,
    },
    {
      id: Math.random(),
      background:
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      width: 580,
    },
  ];

  return (
    <section className='gallery'>
      <ContainerTop
        header='HAPPY MEMORIES'
        text='Gallery'
        parag='Vestibulum feugiat vitae tortor ut venenatis. Sed cursus, purus eu euismod bibendum, diam nisl suscipit odio, vitae ultrices mauris dolor quis mauris. Curabitur ac metus id leo maximus porta.'
        image={image}
      />

      <div className='gallery__container container'>
        <GalleryItem gallery={gallery} />
        <GalleryItem gallery={gallerySecond} />
        <GalleryItem gallery={galleryThird} />
      </div>
    </section>
  );
};

export default Gallery;
