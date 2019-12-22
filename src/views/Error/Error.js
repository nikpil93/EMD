import React, { Fragment } from 'react'
import { makeStyles } from "@material-ui/core/styles"

import Layout from '../../components/Layout/Layout'

import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "center",
    }
}));

function Error() {
    const classes = useStyles()

    return (
            <Layout>
                <div className={classes.root}>
                    <h1>Κάτι πήγε στραβά...</h1>
                    <h2>Δυστυχώς η σελίδα που αναζητήσατε δεν βρέθηκε,
                        <br/> εαν επιθυμείτε επιστρέψτε στην αρχική σελίδα</h2>
                    <ButtonGroup
                        variant="contained"
                        color="primary"
                        aria-label="full-width contained primary button group"
                    >
                        <Button href="/">Αρχική σελίδα</Button>
                    </ButtonGroup>
                </div>
            </Layout>
            
    )
}

export default Error