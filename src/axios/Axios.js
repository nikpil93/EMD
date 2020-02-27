import axios from 'axios'

export const fetchSponsors = async () => {
    const response = await axios.get("http://jsonplaceholder.typicode.com/photos?_start=0&_limit=2");
    const sponsors = response.data;
    return sponsors;
};

// export const fetchSchedule = async () => {
//     const response = await axios.get("../timeline.json");
//     const schedule = response.data;
//     return schedule;
// };

export const fetchSchedule = async () => {
    const arr = [
        {
            "id" : "1",
            "gr_name" : "hpg",
            "gr_img" : "https://i.picsum.photos/id/1036/200/200.jpg",
            "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
            "gr_link" : "https://www.technologyremastered.eu",
            "pl_name" : "sto toNeon",
            "pl_img" : "https://i.picsum.photos/id/1036/200/200.jpg",
            "pl_link" : "http://toneon.gr/"
        },
        {
            "id" : "2",
            "gr_name" : "scorpions",
            "gr_img" : "https://i.picsum.photos/id/1036/200/200.jpg",
            "text" : "sum quia dolor sit amet, consectetur, adipisci velit, sed quia n",
            "gr_link" : "https://www.technologyremastered.eu",
            "pl_name" : "sto Neon",
            "pl_img" : "https://i.picsum.photos/id/1036/200/200.jpg",
            "pl_link" : "http://toneon.gr/"
        },
        {
            "id" : "3",
            "gr_name" : "kotameta",
            "gr_img" : "https://i.picsum.photos/id/1036/200/200.jpg",
            "text" : "citation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",
            "gr_link" : "https://www.technologyremastered.eu",
            "pl_name" : "toNeon",
            "pl_img" : "https://i.picsum.photos/id/1036/200/200.jpg",
            "pl_link" : "http://toneon.gr/"
        },
        {
            "id" : "4",
            "gr_name" : "bebhlos",
            "gr_img" : "https://i.picsum.photos/id/1036/200/200.jpg",
            "text" : " aute irure dolor in reprehenderit in",
            "gr_link" : "https://www.technologyremastered.eu",
            "pl_name" : "to stoNeon",
            "pl_img" : "https://i.picsum.photos/id/1036/200/200.jpg",
            "pl_link" : "http://toneon.gr/"
        },
        {
            "id" : "5",
            "gr_name" : "whiteraven",
            "gr_img" : "https://i.picsum.photos/id/1036/200/200.jpg",
            "text" : "voluptate velit esse cillum dolore eu fugiat nulla pariatumpo",
            "gr_link" : "https://www.technologyremastered.eu",
            "pl_name" : "Neon",
            "pl_img" : "https://i.picsum.photos/id/1036/200/200.jpg",
            "pl_link" : "http://toneon.gr/"
        }
    ]
    return arr
}