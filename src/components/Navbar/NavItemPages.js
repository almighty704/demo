import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const NavItem = ({ mapList, name }) => {
  const [toggler, setToggler] = useState(true);
  const togglerHanderLink = () => {
    toggler ? setToggler(false) : setToggler(true);
  };

  return (
    <>
      <NavLink onClick={togglerHanderLink} to='#' className='nav-link'>
        {name}
      </NavLink>
      <div
        className={
          toggler
            ? 'dropdown-menux dropdown-pagesx'
            : 'boost dropdown-menux dropdown-pagesx'
        }
      >
        <ul className='dropdown-items dropdown-pages'>
          <div className='display-flex '>
            <span>PAGES</span>
            {mapList.map(link => (
              <li key={link.id} className='dropdown-itemx'>
                <NavLink to='/' className='nav-link-dropdown'>
                  {link.itemFirst}
                </NavLink>
              </li>
            ))}
          </div>
          <div className='display-flex'>
            <span>PORTOFOLIO</span>
            {mapList.map(link => (
              <li key={link.id} className='dropdown-itemx'>
                <NavLink to='/' className='nav-link-dropdown'>
                  {link.itemSecond}
                </NavLink>
              </li>
            ))}
          </div>
          <div className='display-flex'>
            <span>BLOG</span>
            {mapList.map(link => (
              <li key={link.id} className='dropdown-itemx'>
                <NavLink to='/' className='nav-link-dropdown'>
                  {link.itemThird}
                </NavLink>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </>
  );
};

export default NavItem;
