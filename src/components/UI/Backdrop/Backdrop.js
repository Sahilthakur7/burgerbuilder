import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) => (
    console.log(props);
    return(
        <div>
            Hello
        </div>
    )
    // props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;
