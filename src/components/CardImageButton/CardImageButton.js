import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"


const useStyles = makeStyles({
    card: {
        maxWidth: "100%",
    },
    button: {
        width: "100%",
        padding: 0,
        border: "1px solid white",
        borderRadius: "3px"
    },
    cardMedia: {
        borderRadius: "3px"
    }
})

const CardImageButton = ({ url, title }) => {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <Button className={classes.button} href={url}>
                <CardActionArea>
                    <CardMedia
                    className={classes.cardMedia}
                        component="img"
                        alt={title}
                        image={url}
                    />
                </CardActionArea>
            </Button>
        </Card>
    )
}

export default CardImageButton
