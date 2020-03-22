import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import Link from "@material-ui/core/Link"

const useStyles = makeStyles({
  root: {
    position: "absolute",
    backgroundColor: "#3f51b5",
    width: "100%",
    textAlign: "center",
    boxShadow : "20px 0px 15px 0px black"
  },
  link: {
    paddingLeft: "57px",
    margin: "auto",
    textDecoration: "none!important",
    color: "#fff",
  }
})

export default function LabelBottomNavigation() {
  const classes = useStyles()

  return (
    <BottomNavigation className={classes.root}>
        <Link
          className={classes.link}
          href="https://technologyremastered.eu/">
          Follow us @ Technologyremastered
        </Link>
    </BottomNavigation>
  )
}
