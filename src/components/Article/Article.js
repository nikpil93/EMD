import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      marginTop: "8px",
    }
  }));

const Article = ({title, body, loading}) => {
    const classes = useStyles();
    
    if (loading) {
        return <h2> loading bro...wait man... </h2>;
    }

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    {title}
                </Typography>
                <Typography component="p">
                    {body}
                </Typography>
            </Paper>
        </div>
    )
}

export default Article
