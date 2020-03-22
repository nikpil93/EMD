import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root:{
        clipPath: "polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0)",
        top: "64px",
        width: "100%",
        height: "60vh",
        position: "relative",
        background: "url(http://www.europeanmusicday.gr/wp-content/uploads/2019/03/logo-20-light.png) no-repeat center top",
        backgroundColor: "#232176",

    },
})


const BackgroundImage = () => {
    const classes = useStyles();

    return(
        <div className = {classes.root}>
        </div>
    )
};

export default BackgroundImage