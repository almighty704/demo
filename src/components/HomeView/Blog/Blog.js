import ContainerTop from '../../UI/ContainerTop';
import list from '../../../images/list.svg';
import './Blog.scss';
import BlogItem from './BlogItem';
import React, { useState } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
const Blog = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section className='blog'>
      <div className='blog__filter'>
        <ContainerTop
          header='HAPPY MEMORIES'
          text='OUR'
          textSpan='BLOG'
          parag='Vestibulum feugiat vitae tortor ut venenatis. Sed cursus, purus eu euismod bibendum, diam nisl suscipit odio, vitae ultrices mauris dolor quis mauris. Curabitur ac metus id leo maximus porta.'
          image={list}
        />

        <div className='blog__container '>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <CarouselItem className=''>
              <div className='blog__container__flex ' alt='First slide'>
                <BlogItem
                  header='Lorem ipsum dolor sit amet bela'
                  date='Mon, 02-05-2022'
                  parag='Vestibulum feugiat vitae tortor ut venenatis. Sed cursus'
                />
                <BlogItem
                  header='Lorem ipsum dolor sit amet bela'
                  date='Mon, 02-05-2022'
                  parag='Vestibulum feugiat vitae tortor ut venenatis. Sed cursus'
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='blog__container__flex   ' alt='Second slide'>
                <BlogItem
                  header='Lorem ipsum dolor sit amet bela'
                  date='Mon, 02-05-2022'
                  parag='Vestibulum feugiat vitae tortor ut venenatis. Sed cursus'
                />
                <BlogItem
                  header='Lorem ipsum dolor sit amet bela'
                  date='Mon, 02-05-2022'
                  parag='Vestibulum feugiat vitae tortor ut venenatis. Sed cursus'
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='blog__container__flex  ' alt='Third slide'>
                <BlogItem
                  header='Lorem ipsum dolor sit amet bela'
                  date='Mon, 02-05-2022'
                  parag='Vestibulum feugiat vitae tortor ut venenatis. Sed cursus'
                />
                <BlogItem
                  header='Lorem ipsum dolor sit amet bela'
                  date='Mon, 02-05-2022'
                  parag='Vestibulum feugiat vitae tortor ut venenatis. Sed cursus'
                />
              </div>
            </CarouselItem>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Blog;
