import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Link } from '@material-ui/core';

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import EventIcon from "@material-ui/icons/Event";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PhoneIcon from "@material-ui/icons/Phone";
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles(theme => ({
    root: {
        textDecoration: "none !important",
    },
}));

// NA XRHSIMOPOIHTHEI H MAP GIA NA EXW ENA MONO LIST ITEM

function MenuListItems() {
    const classes = useStyles();

    return (
        <div>
            <Link href="/" className={classes.root}> 
                <ListItem button key="Αρχική">
                    <ListItemIcon>
                        <HomeIcon />                             
                    </ListItemIcon>
                    <ListItemText primary="Αρχική"/>
                </ListItem>
            </Link>
            
            <Divider />

            <Link href="/schedule" className={classes.root}> 
                <ListItem button key="Πρόγραμμα">
                    <ListItemIcon>
                        <EventIcon />
                    </ListItemIcon>
                    <ListItemText primary="Πρόγραμμα" />
                </ListItem>
            </Link>

            <Divider />

            <Link href="/articles" className={classes.root}>
                <ListItem button key="Άρθρα">
                    <ListItemIcon>
                        <MenuBookIcon />
                    </ListItemIcon>
                    <ListItemText primary="Άρθρα" />
                </ListItem>
            </Link>

            <Divider />

            <Link href="/contact" className={classes.root}>
                <ListItem button key="Επικοινωνία">
                    <ListItemIcon>
                        <PhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Επικοινωνία" />
                </ListItem>
            </Link>

            <Divider />
        </div>
    )
}

export default MenuListItems
