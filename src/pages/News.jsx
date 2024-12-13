import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/News/Header';
import NewsCard from '../components/News/NewsCard';
import LoadingSpinner from '../components/utils/LoadingSpinner';

function News() {
    const [news, setNews] = useState([]);
    const [searchTerm, setSearchTerm] = useState("peace");
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage, setNewsPerPage] = useState(12);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchData(searchTerm) {
        try {
            setCurrentPage(1)
            const news = await axios({
                method: 'GET',
                url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${NYT_API_KEY}`,
            });
            setIsLoading(false);
            setNews(news.data.response.docs);
        } catch {
            setIsLoading(true);
        }
    }

    useEffect(() => {
        fetchData(searchTerm);
    }, [searchTerm]);

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

    const totalPages = Math.ceil(news.length / newsPerPage);
    function handleNextPage() {
        setCurrentPage(currentPage + 1);
    }
    function handlePrevPage() {
        setCurrentPage(currentPage - 1);
    }

    return (
        <>
            <Header
                search={{searchTerm, setSearchTerm}}
                pagination={{
                    currentPage,
                    totalPages,
                    handleNextPage,
                    handlePrevPage,
                }}
            />
            <div className="container-fluid px-lg-5 py-2 d-flex flex-wrap">
                {isLoading && <LoadingSpinner />}
                {!isLoading && currentNews && currentNews.map((art, index) => {
                    return (
                        <NewsCard
                            key={index}
                            title={art.headline.main}
                            abstract={art.abstract}
                            link={art.web_url}
                            image={art.multimedia[0]?.url}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default News;
