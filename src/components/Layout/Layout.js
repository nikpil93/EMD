import React, { useGlobal } from "reactn"
import { makeStyles } from "@material-ui/core/styles"

import Grid from "@material-ui/core/Grid"
import Sponsor from "../Sponsor/Sponsor"
import BackgroundImage from "../BackgroundImage/backgroundImage";
import SocialBar from "../FixSocial/FixSocial";

const useStyles = makeStyles(theme => ({
    root: {
        margin: "105px 10px 70px 68px",
        maxWidth: "calc(100% - 80px)",
        minHeight: "calc(100vh - 231px)",
    },
}))


const Layout = ({ children }) => {
    const classes = useStyles()
    const [sponsorState] = useGlobal('sponsorState')

    return (
        <Grid container className={classes.root}>

            <Grid item md={9} sm={12} xs={12}>
                {children}
            </Grid>

            <Grid item md={3} sm={12} xs={12}>
            {sponsorState.sponsor.map(item => (
                <Sponsor
                    key={item.id}
                    url={item.url}
                    title={item.title}
                />
            ))}
            </Grid>
        </Grid>

    )
}

export default Layout
