import React, { useEffect, useGlobal } from 'reactn'
import { makeStyles } from "@material-ui/core/styles"
import { fetchArticles } from '../../axios/Axios'

import Layout from '../../components/Layout/Layout'
import Article from '../../components/Article/Article'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  button: {
      
  }
}));


function Blog() {
  const classes = useStyles();
  const [articleState, setArticleState] = useGlobal('articleState')

  useEffect(() => {
    const fetchData = async () => {
      setArticleState({
        ...articleState,
        fetchingArticle: true
      })
      const articles = await fetchArticles()
      setArticleState({
        ...articleState,
        fetchingArticle: false,
        article: articles
      })
    };
    
    fetchData()
  }, [])

  return (
    <Layout>
    {articleState.article.map(item => (
      <Button className={classes.button} href={"/article/" + item.id}>
        <Article
            key={item.id}
            title={item.title}
            body={item.body}
        />
      </Button>
        ))}
    </Layout>
  )
}

export default Blog
