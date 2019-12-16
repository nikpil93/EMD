import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    background: "linear-gradient(63deg, rgba(219,218,240,1) 27%, rgba(175,175,209,1) 52%, rgba(80,80,204,1) 73%, rgba(27,22,128,1) 95%)",
    width: "100%",
    textAlign: "center"
  },
  social: {
    margin: "auto 0 auto auto",
  },
  socialButtons: {
    paddingRight: "10px"
  },
  link: {
    margin: "auto 0 auto 0",
    paddingLeft: "90px"
  }
});

export default function LabelBottomNavigation() {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb" className={classes.link}>
        <Link color="inherit" href="https://technologyremastered.eu/">
          Follow Us
        </Link>
        <Typography color="textPrimary">
          &copy;
          <Link href="https://technologyremastered.eu/">
            TechnologyRemastered
          </Link>
        </Typography>
      </Breadcrumbs>
      <div className={classes.social}>
        <img
          className={classes.socialButtons}
          src="https://img.icons8.com/office/16/000000/facebook.png"
          alt="fb"
        />
        <img
          className={classes.socialButtons}
          src="https://img.icons8.com/office/16/000000/instagram.png"
          alt="ins"
        />
        <img
          className={classes.socialButtons}
          src="https://img.icons8.com/office/16/000000/twitter.png"
          alt="tw"
        />
      </div>
    </BottomNavigation>
  );
}
