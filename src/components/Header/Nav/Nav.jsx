import React, {useContext} from "react";
import { Link } from 'react-router-dom'


const Nav = () => {

  return (
    <nav>
        <ul className="nav-bar">
            <li><Link  to='/'>Home</Link></li>
            <li><Link  to='/search'>Search</Link></li>
            <li> <Link to='/new'>New</Link></li>
        </ul >
    </nav >
)
};

export default Nav;
