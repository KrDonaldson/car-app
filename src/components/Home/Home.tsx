import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Navbar } from "../Navbar"

interface Props {
    title: string;
}

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
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'black',
    },
    button_text: {
        color: 'darkblue',
        textDecoration: 'none',
    },
});

export const Home = ( props: Props ) => {

    const classes = useStyles();

    return (
        <>
            <Navbar />
            <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h1>{ props.title }</h1>
                <Button>
                    <Link to='/inventory' className={classes.button_text}> 
                        Where you get to keep your list of made up cars!
                    </Link>
                </Button>
                </div>
            </div>
        </>
    )
}