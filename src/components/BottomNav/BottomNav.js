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
    boxShadow : "20px 5px 15px 0px black"
  },
  social: {
    margin: "auto 0 auto auto",
  },
  link: {
    paddingLeft: "250px",
    margin: "auto",
    textDecoration: "none!important",
    color: "#fff",
  }
})

export default function LabelBottomNavigation() {
  const classes = useStyles()

  return (
    <BottomNavigation 
      id="debug"
      className={classes.root}>
        <Link
          className={classes.link}
          href="https://technologyremastered.eu/">
          Follow Us @ TechnologyRemastered
          {window.addEventListener("resize", function(){
            console.log("%c resized now", "color:lightblue; font-size:20px;")
            if (document.querySelector("#debug").offsetWidth<=470 ){
            return document.querySelector("#debug").innerHTML = "<a style ='color:white; padding-left:56px; text-align:center!important;'>Follow Us <br/> @ TechnologyRemastered</a>"
            }else{
              return document.querySelector("#debug").innerHTML = "<a href='https://technologyremastered.eu/' style ='text-decoration:none; color:white; padding-left:56px; margin:auto;'>Follow Us @ TechnologyRemastered</a>"
            }
          })}
        </Link>
      <div className={classes.social}>
      </div>
    </BottomNavigation>
  )
}
