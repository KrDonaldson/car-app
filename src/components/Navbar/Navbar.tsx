import React, { Suspense } from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { AuthCheck } from 'reactfire';

const useStyles = makeStyles({
    
    navlogo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    navbar: {
        backgroundColor: '#373737',
        zIndex: 1,
        borderBottom: '1px solid grey',
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    navbarItem: {
        color: 'white',
        textDecoration: 'none',
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    p15: {
        padding: '15px',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    alignCenter: {
        alignItems: 'center'
    },
    ul: {
        listStyleType: 'none',
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    width60: {
        width: '60%',
    },
    width100: {
        width: '100%',
    },
    psides: {
        paddingRight: '10px',
        paddingLeft: '10px',
    },
})

export const Navbar = () => {

    const classes = useStyles();

    return (
        <div className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.alignCenter} ${classes.p15} ${classes.spaceBetween}`}>
            <div className={`${classes.navlogo} `}>
                <Button>
                <Link to='/' className={`${classes.navbarItem} ${classes.psides}`}>Car App</Link>
                </Button>
            </div>
            <div className={`${classes.width60} ${classes.alignCenter}`}>
                <ul className={`${classes.ul} ${classes.row} ${classes.spaceBetween} ${classes.psides}`}>
                    <Suspense fallback = {'loading...'}>
                        <AuthCheck fallback = {
                            <li>
                                <Button>
                                    <Link to='/SignIn' className={`${classes.navbarItem} ${classes.psides}`}>Sign In</Link>
                                </Button>
                            </li>
                        }>
                            <li>
                                <Button>
                                <Link to='/Inventory' className={`${classes.navbarItem} ${classes.psides}`}>Inventory</Link>
                                </Button>
                            </li>
                        </AuthCheck>
                    </Suspense>
                    <li>
                        <Button>
                            <Link to='/ContactUs' className={`${classes.navbarItem} ${classes.psides}`}>Contact Us</Link>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <Link to='/About' className={`${classes.navbarItem} ${classes.psides}`}>About Us</Link>
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
