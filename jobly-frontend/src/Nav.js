import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from './UserContext';


function Nav({ logout }) {
    const { user } = useContext(UserContext);

    function loggedOut() {
        return (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/login'>
                        Login
                    </NavLink>
                </li>
            </ul>
        )
    }

    function loggedIn() {
        return (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/companies'>
                        Companies
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/jobs'>
                        Jobs
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/profile'>
                        Profile
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/' onClick={logout}>
                        LOG OUT
                    </NavLink>
                </li>

            </ul>
        )
    }

    return (

        <nav className="Navigation navbar">
            <Link className="navbar-brand" to='/'>
                JOBLY
            </Link>
            {user ? loggedIn() : loggedOut()}
        </nav>
    )
}

export default Nav;