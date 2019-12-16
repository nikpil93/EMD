import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
    card: {
        maxWidth: "100%"
    },
    button: {
        width: "100%"
    }
});

const CardImageButton = ({ url, title }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Button className={classes.button} href={url}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={title}
                        image={url}
                    />
                </CardActionArea>
            </Button>
        </Card>
    )
};

export default CardImageButton
