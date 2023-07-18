import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarComponent = () =>{
    return (
        <div className="navbar">
        <NavLink to = '/signin'>Sign in</NavLink>
        <NavLink to = '/signup'>Sign up</NavLink>
        </div>
    )
}

export default NavbarComponent