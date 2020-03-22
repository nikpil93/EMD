import React from 'react'
import emailjs from 'emailjs-com';

import { makeStyles } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography'

import Grid from "@material-ui/core/Grid"
import Layout from '../../components/Layout/Layout'

const useStyles = makeStyles(theme => ({
    main: {
        margin: "auto",
        minHeight: "600px",
        paddingRight: "1rem",
    },
    creative: {
        textAlign: "center",
        paddingTop: 2,
        margin: "auto"
    },
    form: {
        paddingTop: "10px",
        paddingBottom: "10px",
        width: "inherit",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center"
    },
    gridInput: {
        paddingTop: "50px"
    },
    input: {
        width: "90%",
        height: "29px",
        borderRadius: "4px",
        boxShadow: "1px 2px 4px 1px #b9b7d0"

    },
    button: {
        border: "1px solid white",
        width: "120px",
        height: "40px",
        borderRadius: "4px",
        backgroundColor: "#99c2ff",
        color: "white",
        transition: "all .08s ease-in-out",
        "&:hover":{
            transform: "scale(1.061)",
            cursor: "pointer"
        }
    },
    textarea: {
        width: "90%",
        height: "80px",
        borderRadius: "4px",
        boxShadow: "1px 2px 4px 1px #b9b7d0",
    }

}))

function ContactUs() {

    const classes = useStyles()

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('nikpil93', 'template_FWt1PKBN', e.target, 'user_ZuR0gghABgFRBYTOhqcZE')
          .then((error) => {
              console.log(error.text)
          }).then(function(){
            document.querySelector("textarea").value=""
            const inputs = document.querySelectorAll("input")
            for (let i=0; i<inputs.leng-1; i++){
                console.log(inputs[i].value)
                inputs[i].value = ""
            }
            })
      }

    return (
        <Layout>
            <Typography component="h2" variant="h4" align="center">
                Καλωσήρθατε στην σελίδα επικοινωνίας μας
            </Typography>
            <Grid container className={classes.main}> 
                <Grid container className={classes.creative} item style={{border:"1px solid blue"}} xl={6} md={8} sm={7} xs={12}>     
                    <Grid className={classes.creative} item xl={6} md={6} sm={6} xs={6}>
                    <img src="https://i.picsum.photos/id/1036/200/200.jpg" alt="1"></img>
                    </Grid>
                    <Grid item xl={6} md={6} sm={6} xs={6}>
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
                    <Grid item xl={6} md={6} sm={6} xs={6}>
                    <img src="https://i.picsum.photos/id/1036/200/200.jpg" alt="3"></img>
                    </Grid>
                    <Grid className={classes.creative} item xl={6} md={6} sm={6} xs={6}>
                        <h5>lorem ipsum dolor sit amet </h5>
                        <h5>lorem ipsum dolor sit amet </h5>
                        <h5>lorem ipsum dolor sit amet </h5>
                    </Grid>
                </Grid>
                <Grid container style={{border:"1px solid green"}} item xl={6} md={4} sm={5} xs={12}>
                    <form className={`contact-form ${classes.form}`} onSubmit={sendEmail}>
                        <Grid item xl={12} md={12} sm={12} xs={12}>
                            <h2>Συμπληρώστε την παρακάτω φόρμα για επικοινωνήσετε μαζί μας</h2>
                            <hr/>
                        </Grid>
                        <Grid className={classes.gridInput} item xl={12} md={12} sm={12} xs={12}>
                            <label>Συμπληρώστε το Όνομα σας</label><br/>
                            <input className={classes.input} type="text" name="user_name"/>
                        </Grid>
                        <Grid className={classes.gridInput} item xl={12} md={12} sm={12} xs={12}>
                            <label>Συμπληρώστε το Email σας</label><br/>
                            <input className={classes.input} type="email" name="user_email"/>
                        </Grid>
                        <Grid className={classes.gridInput} item xl={12} md={12} sm={12} xs={12}>
                            <label>Γράψτε το μήνυμα σας εδώ</label><br/>
                            <textarea className={classes.textarea} name="message"/>
                        <Grid/>
                        <Grid className={classes.gridInput} item xl={12} md={12} sm={12} xs={12}></Grid>
                            <input className={classes.button} type="submit" value="Αποστολή"/>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default ContactUs