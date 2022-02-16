import React from 'react';
import './Stats.scss';
import StatsItem from './StatsItem';
import car from '../../../images/cars.svg';
import line from '../../../images/line.svg';
import tours from '../../../images/tours.svg';
import holidays from '../../../images/holidays.svg';
import hotels from '../../../images/hotels.svg';
import cruises from '../../../images/cruises.svg';
import planes from '../../../images/planes.svg';
const stats = [
  {
    id: Math.random(),
    img: tours,
    name: 'Tours',
    amount: 356,
    line: line,
  },
  {
    id: Math.random(),
    img: holidays,
    name: 'Holidays',
    amount: 438,
    line: line,
  },
  {
    id: Math.random(),
    img: hotels,
    name: 'Hotels',
    amount: 526,
    line: line,
  },
  {
    id: Math.random(),
    img: cruises,
    name: 'Cruises',
    amount: 169,
    line: line,
  },
  {
    id: Math.random(),
    img: planes,
    name: 'Planes',
    amount: 293,
    line: line,
  },
  {
    id: Math.random(),
    img: car,
    name: 'Cars',
    amount: 675,
  },
];

const Stats = () => {
  return (
    <section className='stats d-flex container justify-content-between  '>
      <StatsItem stats={stats} />
    </section>
  );
};

export default Stats;
