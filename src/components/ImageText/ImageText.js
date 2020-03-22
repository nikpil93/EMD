import React from 'react'

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
    creative: {
        textAlign: "center",
        margin: "auto"
    }}))

export default function ImageText() {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Grid className={classes.creative} item xl={6} md={6} sm={6} xs={6}>
            <img src="https://i.picsum.photos/id/1036/200/200.jpg" alt="1"></img>
            </Grid>
            <Grid className={classes.creative} item xl={6} md={6} sm={6} xs={6}>
                <h5>lorem ipsum dolor sit amet </h5>
                <h5>lorem ipsum dolor sit amet </h5>
                <h5>lorem ipsum dolor sit amet </h5>
            </Grid>
            <Grid className={classes.creative} item xl={6} md={6} sm={6} xs={6}>
            <img src="https://i.picsum.photos/id/1036/200/200.jpg" alt="2"></img>
            </Grid>
            <Grid className={classes.creative} item xl={6} md={6} sm={6} xs={6}>
                <h5>lorem ipsum dolor sit amet </h5>
                <h5>lorem ipsum dolor sit amet </h5>
                <h5>lorem ipsum dolor sit amet </h5>
            </Grid>
            <Grid className={classes.creative} item xl={6} md={6} sm={6} xs={6}>
            <img src="https://i.picsum.photos/id/1036/200/200.jpg" alt="3"></img>
            </Grid>
            <Grid className={classes.creative} item xl={6} md={6} sm={6} xs={6}>
                <h5>lorem ipsum dolor sit amet </h5>
                <h5>lorem ipsum dolor sit amet </h5>
                <h5>lorem ipsum dolor sit amet </h5>
            </Grid>
        </React.Fragment>
        
    )
}








