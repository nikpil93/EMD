import React, {Fragment} from 'react'

import Typography from '@material-ui/core/Typography'

import Layout from '../../components/Layout/Layout'
import BackgroundImage from "../../components/BackgroundImage/backgroundImage";

function Contact() {

    // const [form, setForm] = useState({
    //     creatorName: "",
    //     brandName: "",
    //     email: "",
    //     message: "",
    // })
    return (
        <Fragment>
            <BackgroundImage/>
            <Layout>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Καλωσήρθατε στην σελίδα επικοινωνίας μας
                </Typography>
            </Layout>
        </Fragment>
    )
}

export default Contact
