import React, { useEffect, useState } from "react";
import NewsItem from "./newsitem";

const NewsBoard = ({ category }) => {

    const [article, setArticle] = useState([]);

    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.NEWS_API_KEY}`;
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=885c3a78ecb941e5812b76aa423ade6f`;

    const fetchFunc = () => {
        fetch(url).then(response => response.json())
            .then(data => setArticle(data.articles))
    }

    useEffect(() => {
        fetchFunc();
    }, [category])

    return (
        <div className="news-board">
            <h2 className="text-center m-2 fs-1 ">Latest <span className="text-danger ">News</span></h2><hr></hr>

            {article.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} ></NewsItem>
            })}
        </div>
    )
}
export default NewsBoard;