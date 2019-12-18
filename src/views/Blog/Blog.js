import React, { useEffect, useGlobal } from 'reactn'
import { fetchArticles } from '../../axios/Axios'

import Layout from '../../components/Layout/Layout'
import Article from '../../components/Article/Article'

function Blog() {
    const [articleState, setArticleState] = useGlobal('articleState')

    useEffect(() => {
      const fetchData = async () => {
        setArticleState({
          ...articleState,
          fetchingArticle: true
        });
        const articles = await fetchArticles()
        console.log(articles);
        setArticleState({
          ...articleState,
          fetchingArticle: false,
          article: articles
        });
        console.log(articleState)
      };
      
      fetchData()
    }, [])

    return (
        <div>
            <Layout>
            {articleState.article.map(item => (
                    <Article
                        key={item.id}
                        title={item.title}
                        body={item.body}
                    />
                ))}
            </Layout>
        </div>
    )
}

export default Blog
