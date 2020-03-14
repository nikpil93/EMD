import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    position: "absolute",
    backgroundColor: "#3f51b5",
    width: "100%",
    textAlign: "center"
  },
  social: {
    margin: "auto 0 auto auto",
  },
  link: {
    margin: "auto 0 auto 0",
    textDecoration: "none!important",
    color: "#fff",
    paddingLeft: "65px"
  }
})

export default function LabelBottomNavigation() {
  const classes = useStyles()

  return (
    <BottomNavigation className={classes.root}>
        <Link
          className={classes.link}
          href="https://technologyremastered.eu/">
          Follow Us @ TechnologyRemastered
        </Link>
      <div className={classes.social}>
      </div>
    </BottomNavigation>
  )
}
