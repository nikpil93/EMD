import React, { useGlobal } from "reactn"
import { makeStyles } from "@material-ui/core/styles"
import Link from "@material-ui/core/Link"

import Grid from "@material-ui/core/Grid"
import Sponsor from "../Sponsor/Sponsor"

const useStyles = makeStyles(theme => ({
    grid: {
        borderRadius: "3px",
        margin: "105px 10px 70px 68px",
        maxWidth: "calc(100% - 80px)",
        minHeight: "calc(100vh - 231px)",
    },
    main: {
        marginLeft: "auto!important",
        marginRight: "auto!important"
    },
    link:{
        margin: "auto!important",
        fontSize: "10px",
        textDecoration: "none!important",
        color: "black",
    },
    sponsor: {
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "3px",
        boxShadow: "inset 1px 0px 20px 0px #fafaff",
        backgroundColor: "inherit"
    }
}))

const Layout = ({ children }) => {
    const classes = useStyles()
    const [sponsorState] = useGlobal('sponsorState')

    return (
        <Grid container className={classes.grid}>

            <Grid className={classes.main} item xl={10} md={10} sm={12} xs={12}>
                {children}
            </Grid>

            <Grid item xl={2} md={2} sm={6} xs={6} className={classes.sponsor}>
            {sponsorState.sponsor.map(item => (
                <Sponsor
                    key={item.id}
                    url={item.url}
                    title={item.title}
                />
            ))}
            {
                !document.location.pathname.includes("contact") ? 
                <Link 
                className={classes.link}
                href="/contact">
                Διαφημιστείτε Eδώ / Στείλτε μας μήνυμα
                </Link> :
                null
            }
            </Grid>
        </Grid>
    )
}

export default Layout
