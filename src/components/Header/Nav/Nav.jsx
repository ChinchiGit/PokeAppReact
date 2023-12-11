import React, {useContext} from "react";
import { Link } from 'react-router-dom'


const Nav = () => {

  return (
    <nav className="navBar">
        <ul>
            <li><Link  to='/'>HOME</Link></li>
            <li><Link  to='/search'>SEARCH</Link></li>
            <li> <Link to='/new'>CREATE NEW</Link></li>
        </ul >
    </nav >
)
};

export default Nav;
