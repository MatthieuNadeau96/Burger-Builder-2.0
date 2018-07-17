import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerButton from '../DrawerButton/DrawerButton';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div className={classes.DrawerButton}>
      <DrawerButton clicked={props.drawerButtonClicked}/>
    </div>
      <div className={classes.Logo}>
        <Logo/>
      </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
