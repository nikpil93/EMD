import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import CardImageButton from '../CardImageButton/CardImageButton'

const useStyles = makeStyles(theme => ({
    root: {
      paddingLeft: "3px", 
      marginTop: "8px",
    }
  }))

const Sponsor = ({ url }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CardImageButton url={url}>
            </CardImageButton>
        </div>
    )
}

export default Sponsor