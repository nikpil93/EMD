import React from 'react'

import { makeStyles } from "@material-ui/core/styles"
import { Link } from '@material-ui/core'
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import HomeIcon from "@material-ui/icons/Home"
import EventIcon from "@material-ui/icons/Event"
import PhoneIcon from "@material-ui/icons/Phone"
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import Divider from "@material-ui/core/Divider"


const useStyles = makeStyles(theme => ({
    root: {
        textDecoration: "none !important",
    },
}))

function MenuListItems() {
    const classes = useStyles()

    return (
        <React.Fragment>
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

            <Link href="/gallery" className={classes.root}>
                <ListItem button key="Γκαλερί">
                    <ListItemIcon>
                        <PhotoLibraryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Γκαλερί" />
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
        </React.Fragment>
    )
}

export default MenuListItems
