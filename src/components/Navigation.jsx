import React from 'react';
import { NavLink } from 'react-router'; 

function Navigation() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}
          >
           Головна
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}
          >
            Про нас
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}
          >
            Контакти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;