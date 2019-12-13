import React from 'react'
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import EventIcon from "@material-ui/icons/Event";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PhoneIcon from "@material-ui/icons/Phone";
import Divider from "@material-ui/core/Divider";


function MenuListItems() {
    return (
        <div>
            <ListItem button key="Αρχική">
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Αρχική" />
            </ListItem>
            <Divider />
            <ListItem button key="Πρόγραμμα">
                <ListItemIcon>
                    <EventIcon />
                </ListItemIcon>
                <ListItemText primary="Πρόγραμμα" />
            </ListItem>
            <Divider />
            <ListItem button key="Άρθρα">
                <ListItemIcon>
                    <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="Άρθρα" />
            </ListItem>
            <Divider />
            <ListItem button key="Επικοινωνία">
                <ListItemIcon>
                    <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary="Επικοινωνία" />
            </ListItem>
            <Divider />
        </div>
    )
}

export default MenuListItems
