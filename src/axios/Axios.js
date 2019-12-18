import axios from 'axios'

export const fetchArticles = async () => {
    const response = await axios.get("http://jsonplaceholder.typicode.com/posts?_start=0&_limit=5");
    const articles = response.data;
    return articles;
};

export const fetchSponsors = async () => {
    const response = await axios.get("http://jsonplaceholder.typicode.com/photos?_start=0&_limit=2");
    const sponsors = response.data;
    return sponsors;
};

export const fetchSchedule = async () => {
    const response = await axios.get("http://www.google.gr");
    const schedule = response.data;
    return schedule;
};
