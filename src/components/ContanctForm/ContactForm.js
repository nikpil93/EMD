import React from 'react'

import emailjs from 'emailjs-com';

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"


const useStyles = makeStyles(theme => ({
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

export default function ContactForm() {
    const classes = useStyles()

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}
