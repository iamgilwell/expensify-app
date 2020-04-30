import React from 'react'
import { NavLink } from 'react-router-dom';


const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <ul>
            <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
            <li><NavLink to="/portfolio" activeClassName="is-active" exact={true} s>Portfolio</NavLink></li>
            <li><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></li>
        </ul>

    </header>
)

export default Header; 