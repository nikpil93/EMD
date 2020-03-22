import React from 'react'

import {Animated} from "react-animated-css"
import ScrollAnimation from 'react-animate-on-scroll'

import Layout from '../../components/Layout/Layout'
import InfoEmdR from "../../components/InfoEmd/InfoEmdR"
import InfoEmdL from "../../components/InfoEmd/InfoEmdL"
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage"

import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"



const useStyles = makeStyles({
    title:{
        marginTop: "110px",
        marginBottom: "3rem",
        textAlign: "center",
    }
});

const Home= () => {
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <BackgroundImage/>
            <Animated animationIn="rubberBand" animationOut="bounceOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <Typography className = {classes.title} variant="h2">Ευρωπαϊκή Γιορτή της Μουσικής στην Πάτρα</Typography>
            </Animated>
            <Layout>
                <ScrollAnimation 
                    animateIn='bounceInRight'
                    animateOut='bounceOutLeft' animateOnce='TRUE'>
                    <InfoEmdR
                        img="https://res.cloudinary.com/technologyremastered/image/upload/v1549734027/img_tr/bg-showcase-1.jpg"
                        text="Το πάθος αλλά και η εμπειρία μας θα συνεχιστεί και στην φετινή
                                γιορτή της Μουσικής εκπληρώνοντας όλο και περισσότερους
                                στόχους. Σας περιμένουμε !!!"
                    />
                </ScrollAnimation>
                <ScrollAnimation 
                    animateIn='bounceInLeft'
                    animateOut='bounceOutRight' animateOnce='TRUE'>
                    <InfoEmdL
                        img="https://res.cloudinary.com/technologyremastered/image/upload/v1549734027/img_tr/bg-showcase-1.jpg"
                        text="Το 2019 πραγματοποιήθηκαν 12 συναυλίες για την περίοδο της γιορτής της Ευρωπαϊκής Μουσικής άγγιξε τις 100.000 προβολές
                        σε περισσότερα από 70.000 άτομα. Η περσινή χρονιά ξεπέρασε
                        κάθε προσδοκία με πλήθος κόσμου να γεμίζει την κάθε εκδήλωση
                        Η Πάτρα γέμισε απο μουσική ξανά και ανέδειξε την λυρικότητα της."
                    />
                </ScrollAnimation>
                <ScrollAnimation 
                    animateIn='bounceInRight'
                    animateOut='bounceOutLeft' animateOnce='TRUE'>
                    <InfoEmdR
                        img="https://res.cloudinary.com/technologyremastered/image/upload/v1549734027/img_tr/bg-showcase-1.jpg"
                        text="Το 2018 οι συναυλίες τις Ευρωπαϊκής Μουσικής της Μουσικής άγγιξε τις 70.000 προβολές σε περισσότερα από 50.000 άτομα. Η Πάτρα γέμισε απο μουσική με πάρα πολλούς ερασιτέχνες μουσικούς που δείξαν το ταλέντο τους παίζοντας τη μουσική τους."
                    />
                </ScrollAnimation>
            </Layout>
        </React.Fragment>
    )
}
export default Home
