import React from 'react'

import Album from "../../components/Album/Album"
import Layout from '../../components/Layout/Layout'
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";

function Gallery() {
    
    return (
        <React.Fragment>
            <BackgroundImage/>
            <Layout>
                <Album/>
            </Layout>
        </React.Fragment>
    )
}
export default Gallery
