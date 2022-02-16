import React from 'react';
import './Recomended.scss';
import RecomendedItem from './RecomendedItem';

const citys = [
  {
    id: Math.random(),
    price: 130,
    temp: 31,
    city: 'Milano',
    country: 'Italy',
    url: 'https://images.unsplash.com/photo-1516296270211-f3ae5494e65d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80',
  },
  {
    id: Math.random(),
    price: 123,
    temp: 3,
    city: 'Berlin',
    country: 'Germany',
    url: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: Math.random(),
    price: 115,
    temp: 22,
    city: 'Moscow',
    country: 'Russia',
    url: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: Math.random(),
    price: 88,
    temp: 22,
    city: 'Kyiv',
    country: 'Ukraine',
    url: 'https://images.unsplash.com/photo-1591994719351-273dbc03f137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  },
];

const citysSecond = [
  {
    id: Math.random(),
    price: 129,
    temp: 20,
    city: 'London',
    country: 'United Kingdom',
    url: 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: Math.random(),
    price: 1119,
    temp: 15,
    city: 'Toronto',
    country: 'Canada',
    url: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
  },
  {
    id: Math.random(),
    price: 999,
    temp: 37,
    city: 'Hawai',
    country: 'US',
    url: 'https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
  },
  {
    id: Math.random(),
    price: 2000,
    temp: 25,
    city: 'Tokyo',
    country: 'Japan',
    url: 'https://images.unsplash.com/photo-1523650086871-99e5012dbe9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1562&q=80',
  },
];

const Recomended = () => {
  return (
    <section className='recomended'>
      <div className='recomended__container'>
        <RecomendedItem city={citys} />
      </div>
      <div className='recomended__container'>
        <RecomendedItem city={citysSecond} />
      </div>
    </section>
  );
};

export default Recomended;
