import React, { useState, useEffect } from 'react'
import Grid from "@material-ui/core/Grid";
import Article from "../Article/Article"
import Sponsor from "../Sponsor/Sponsor"
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';


const useStyles = makeStyles(theme => ({
    root: {
        margin: "105px 10px 70px 68px",
        maxWidth: "calc(100% - 78px)",
        minHeight: "calc(100vh - 231px)",
    },
}));


const Layout = ({ children }) => {
    const classes = useStyles();
    const [sponsor, setSponsor] = useState([]);
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchArticle = async () => {
            setLoading(true);
            const response = await axios.get("http://jsonplaceholder.typicode.com/posts?_start=0&_limit=5");
            setArticle(response.data);
            setLoading(false);
        };

        fetchArticle();
    }, []);

    useEffect(() => {
        const fetchSponsor = async () => {
            setLoading(true);
            const response = await axios.get("http://jsonplaceholder.typicode.com/photos?_start=0&_limit=1");
            setSponsor(response.data);
            setLoading(false);
        };

        fetchSponsor();
    }, []);

    return (
        <div>
            <Grid container className={classes.root}>

                <Grid item md={9} sm={12} xs={12}>Articles
                    {children}
                    {article.map(item => (
                    <Article
                        key={item.id}
                        body={item.body}
                        title={item.title}
                        loading={loading}
                    />
                ))}
                </Grid>

                <Grid item md={3} sm={12} xs={12}>Sponsors
                {sponsor.map(item => (
                    <Sponsor
                        key={item.id}
                        url={item.url}
                        title={item.title}
                        loading={loading}
                    />
                ))}
                </Grid>
            </Grid>
        </div>

    )
}

export default Layout
