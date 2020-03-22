import React, {Fragment} from 'react'

import Album from "../../components/Album/Album"

import Layout from '../../components/Layout/Layout'
import BackgroundImage from "../../components/BackgroundImage/backgroundImage";

function Gallery() {
    return (
        <Fragment>
            <BackgroundImage/>
            <Layout>
                <Album/>
            </Layout>
        </Fragment>
    )
}

export default Gallery
