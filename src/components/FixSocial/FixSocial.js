import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyles = makeStyles(theme => ({
    social: {
        position: "fixed",
        right:0,
        marginRight: "15px",
        zIndex: "100",
        background: "#edf4f7",
        opacity: "0.7",
        overflowX: "hidden",
        padding: "4px 4px",
        top: "149px",


        '& a': {
            display: "block",
        }
    },
    iconSvg:{
        width: "40px !important",
        height: "40px !important",
    },

}));

const SocialBar = () => {

    const classes = useStyles();

    return (
            <div className = {classes.social}>
                <a href="#f"><FacebookIcon className = {classes.iconSvg}/></a>
                <a href= "#y"><YouTubeIcon className = {classes.iconSvg}/></a>
                <a href="#i"><InstagramIcon className = {classes.iconSvg}/></a>
                <a href="#i"><TwitterIcon className = {classes.iconSvg}/></a>
            </div>
        )
};

export default SocialBar;
