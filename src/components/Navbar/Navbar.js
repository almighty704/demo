import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavItem from './NavItem';
import './Navbar.scss';
import menu from '../../images/menu.svg';
import NavItemPages from './NavItemPages';
const home = [
  {
    id: Math.random(),
    item: 'STANDART SLIDER',
  },
  {
    id: Math.random(),
    item: 'MAIN SEARCH',
  },
  {
    id: Math.random(),
    item: 'FULL SLIDER',
  },
];

const hotels = [
  {
    id: Math.random(),
    item: 'HOTELS LIST',
  },
  {
    id: Math.random(),
    item: 'HOTELS SEARCH',
  },
  {
    id: Math.random(),
    item: 'HOTELS DETAILS',
  },
];

const pages = [
  {
    id: Math.random(),
    first: 'PAGES',
  },

  {
    id: Math.random(),
    itemFirst: 'ABOUT US',
  },

  {
    id: Math.random(),
    itemFirst: 'SERVICES',
  },
  {
    id: Math.random(),
    itemFirst: 'OUR PROCCES',
  },
  {
    id: Math.random(),
    itemFirst: 'OUR TEAM',
  },
  {
    id: Math.random(),
    itemFirst: 'PROFILE',
  },
  {
    id: Math.random(),
    itemFirst: 'ELELEMNTS',
  },

  {
    id: Math.random(),
    second: 'PORTOFOLIO',
  },

  {
    id: Math.random(),
    itemSecond: 'GALLERY',
  },

  {
    id: Math.random(),
    itemSecond: 'PORTOFOLIO SINGLE',
  },
  {
    id: Math.random(),
    itemSecond: 'OUR PROCCES',
  },
  {
    id: Math.random(),
    itemSecond: 'OUR TEAM',
  },
  {
    id: Math.random(),
    itemSecond: 'PROFILE',
  },
  {
    id: Math.random(),
    itemSecond: 'ELELEMNTS',
  },

  {
    id: Math.random(),
    third: 'BLOG',
  },

  {
    id: Math.random(),
    itemThird: 'TWO COLUMNS + SIDEBAR',
  },

  {
    id: Math.random(),
    itemThird: 'TWO COLUMNS + SIDEBAR',
  },
  {
    id: Math.random(),
    itemThird: 'OUR PROCCES',
  },
  {
    id: Math.random(),
    itemThird: 'OUR TEAM',
  },
  {
    id: Math.random(),
    itemThird: 'PROFILE',
  },
  {
    id: Math.random(),
    itemThird: 'ELELEMNTS',
  },
];

const shop = [
  {
    id: Math.random(),
    item: 'Shop Checkout',
  },
  {
    id: Math.random(),
    item: 'Shop Grid',
  },
  {
    id: Math.random(),
    item: 'Shop Cart',
  },
  {
    id: Math.random(),
    item: 'Shop Search',
  },
];

const Navbar = props => {
  const [toggled, setToggled] = useState(true);

  const togglerHandler = () => {
    toggled ? setToggled(false) : setToggled(true);
  };

  return (
    <nav className='header__navbar container'>
      <NavLink className='header__navbar__logo' to='/home'>
        Sun<span className=''>Tour</span>
      </NavLink>

      <img
        className={
          toggled ? 'header__navbar__toggler' : 'sticky header__navbar__toggler'
        }
        onClick={togglerHandler}
        src={menu}
        alt=''
      />

      <div
        className={
          toggled ? 'header__navbar__list' : 'header__navbar__list active'
        }
      >
        <ul className='header__navbar__list__items'>
          <li className='header__navbar__list__items--item'>
            <NavItem
              name='Home'
              mapList={home}
              togglerHandler={togglerHandler}
            />
          </li>
          <li className='header__navbar__list__items--sl'>/</li>
          <li className='header__navbar__list__items--item'>
            <NavItem
              name='Hotels'
              mapList={hotels}
              togglerHandler={togglerHandler}
            />
          </li>

          <li className='header__navbar__list__items--sl'>/</li>
          <li className='header__navbar__list__items--item'>
            <NavItemPages
              name='Pages'
              mapList={pages}
              togglerHandler={togglerHandler}
            />
          </li>
          <li className='header__navbar__list__items--sl'>/</li>
          <li className='header__navbar__list__items--item'>
            <NavItem
              name='Shop'
              mapList={shop}
              togglerHandler={togglerHandler}
            />
          </li>
          <li className='header__navbar__list__items--sl'>/</li>

          <li className='header__navbar__list__items--item'>
            <NavLink to='/contacts' className='nav-link'>
              CONTACTS
            </NavLink>
          </li>
          <li className='header__navbar__list__items--sl'>/</li>

          <li className='header__navbar__List__items--item'>
            <NavLink to='/' className='nav-link'>
              SEARCH
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
