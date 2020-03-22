import React from 'react'

import { makeStyles } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography'
import Grid from "@material-ui/core/Grid"

import Layout from '../../components/Layout/Layout'
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'
import ImageText from '../../components/ImageText/ImageText'
import ContactForm from '../../components/ContanctForm/ContactForm'


const useStyles = makeStyles(theme => ({
    main: {
        margin: "auto",
        minHeight: "600px",
        paddingTop: "0.7rem",
        textAlign: "center",
    }
}))

function ContactUs() {
    const classes = useStyles()
    
    return (
        <Layout>
            <BackgroundImage/>
            <Typography component="h2" variant="h4" align="center">
                Καλωσήρθατε στην σελίδα επικοινωνίας μας
            </Typography>
            <Grid container className={classes.main}> 
                <Grid container item xl={6} md={8} sm={12} xs={12}>     
                    <ImageText/>
                </Grid>
                <Grid container item xl={6} md={4} sm={12} xs={12}>
                    <ContactForm/>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default ContactUs