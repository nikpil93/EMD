import React from 'react'

import Typography from '@material-ui/core/Typography'

import Layout from '../../components/Layout/Layout'

function Contact() {

    // const [form, setForm] = useState({
    //     creatorName: "",
    //     brandName: "",
    //     email: "",
    //     message: "",
    // })
    return (
        
        <Layout>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Καλωσήρθατε στην σελίδα επικοινωνίας μας
            </Typography>
        </Layout>
    )
}

export default Contact
