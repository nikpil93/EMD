import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import CardImageButton from '../CardImageButton/CardImageButton'

const useStyles = makeStyles(theme => ({
    root: {
      paddingLeft: "3px", 
      marginTop: "8px",
    }
  }));

const Sponsor = ({ title, url }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CardImageButton 
                url={url}
                height="200px"
                title={title}
            >
            </CardImageButton>
        </div>
    );
};

export default Sponsor;
