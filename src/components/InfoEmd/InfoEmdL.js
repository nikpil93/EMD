import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles ({
    root:{
        marginBottom: "25px"
    },

    img:{
        backgroundImage:props=> `url(${props.img})`,
        minHeight: "15rem",
        backgroundSize: "cover"
    },
    paper:{
        height: "100%",
        width: "100%",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem"
    }
});

const InfoEmdR = ({img, text}) => {

    const classes = useStyles({img});

    return (

        <Container maxWidth='lg'>
            <Grid container className = {classes.root}>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        {text}
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} className = {classes.img} >

                </Grid>
            </Grid>
        </Container>
    )
};

export default InfoEmdR;
