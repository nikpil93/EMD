import React from 'react'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: "all .24s ease-in-out",
    "&:hover": {
      transform : "scale(1.08)"
    },
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}))

const cards = [1, 2, 3, 4, 5, 6]

export default function Album() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                Καλωσήρθατε στην προσωπική γκάλερι της σελίδας μας όπου θα δείτε ένα δείγμα από το χρονικό της Ευρωπαϊκής Γιορτής στην πόλη της Πάτρας .
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>

            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={`test ${classes.card}`}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  )
}