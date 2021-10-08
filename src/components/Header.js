import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Header.module.css'


function Header() {
    return (
        <div>
            <header className={classes.header}>
                <div className={classes.logo}>React Header</div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">All Meetup</Link>
                        </li>
                        <li>
                            <Link to="/favorites/">Favorites</Link>
                        </li>
                        <li>
                            <Link to="/new-meetup/">New Meetup</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
