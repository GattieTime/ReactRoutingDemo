import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarComponent = (props)=>{
    return(<nav>
        <NavLink to={props.urlPaths[0]}>Base Path</NavLink>
        <span style={{padding:"15px"}}> </span>
        <NavLink to={"/home"}>Home</NavLink>
        <span style={{padding:"15px"}}> </span>
        <NavLink to={"/5"}>Display 5</NavLink>
    </nav>)
}

export default NavBarComponent;