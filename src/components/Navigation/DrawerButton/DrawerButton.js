import React from 'react';

import classes from './DrawerButton.css';

const drawerButton = ( props ) => (
  <div className={classes.DrawerButton} onClick={props.clicked}>&#9776;</div>
);

export default drawerButton;
