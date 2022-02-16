import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.scss';
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
      <div className={toggler ? 'dropdown-menux' : 'boost dropdown-menux '}>
        <ul className='dropdown-items'>
          {mapList.map(link => (
            <li key={link.id} className='dropdown-itemx'>
              <NavLink to='/' className='nav-link-dropdown'>
                {link.item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavItem;
