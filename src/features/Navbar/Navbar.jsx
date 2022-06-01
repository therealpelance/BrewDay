import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    return (
        <nav className='nav-container'>
            <NavLink to='/' className='link'>Near Me</NavLink>
            <NavLink to='/search' className='link'>Search</NavLink>
            <NavLink to='/cities' className='link'>Popular Cities</NavLink>
            <NavLink to='/planner' className='link'>Planner</NavLink>
        </nav>
    )
};

export default Navbar;