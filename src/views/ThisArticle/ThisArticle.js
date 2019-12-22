import React, { useState, useEffect } from 'reactn'
import { fetchArticle } from '../../axios/Axios'

import Layout from '../../components/Layout/Layout'
import Article from '../../components/Article/Article';


function ThisArticle() {
    const[thisArticle, setThisArticle] = useState({
        fetchingArticle: true,
        article: [],
        articleError: null,
    })

        useEffect(() => {
            console.log(thisArticle)
            const fetchData = async () => {
                setThisArticle({ ...thisArticle, fetchingArticle: true })
                console.log(thisArticle)
                const article = await fetchArticle();
                setThisArticle({ ...thisArticle, fetchingArticle: false, article: article })
                console.log(thisArticle)
            };
            
            fetchData()
        }, []);


    return (
        <Layout>
            <Article
                key={thisArticle.id}
                title={thisArticle.title}
                body={thisArticle.body}
            />
        </Layout>
    )
}

export default ThisArticle
