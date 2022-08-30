import React from 'react'
import { Navbar } from '../Navbar'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    background: {
        backgroundImage: `linear-gradient(135deg, #50b0f1 0%, #5e5c67 100%)`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '10%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },
    sub_text:{
        textAlign: 'center',
        position: 'relative',
        top: '15%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'darkslategrey',
    },
});

export const ContactUs = () => {

    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <div className={`${classes.background}`}>
                <h1 className={classes.main_text}>Contact Me</h1>
                <h3 className={classes.sub_text}>Feel free to reach out to me ... somewhere.. </h3>
            </div>
        </div>
    )
}
