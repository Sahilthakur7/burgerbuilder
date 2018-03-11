import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo height="80%" />
        <nav className={classes.desktopOnly}>
            <NavigationItems />
        </nav>
    </header>

);

export default toolbar;
