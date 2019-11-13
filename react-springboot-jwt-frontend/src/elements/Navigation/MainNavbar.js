import React from 'react';
import { Link } from 'react-router-dom';
import './MainNavBar.css';

export const MainNavBar = () => (
    <nav className="navbar navbar-dark bg-dark">
        <div className="btn-group">
            <Link className="btn naviElement" to='/'>
                Home
            </Link>
        </div>
    </nav>
)
