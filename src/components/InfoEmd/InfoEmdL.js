import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles ({
    root:{

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

        <Container maxWidth='lg' >
            {/*<div className = {classes.root}>

            </div>*/}
            <Grid container>
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
