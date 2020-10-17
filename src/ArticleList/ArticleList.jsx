import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticleList = (props) => {
    const articles = props.articles

    return (
        <div>
            <ul>
            {articles.map((article) => (
                <li key={article.slug}>
                    <div >
                        <ArticleListItem key={article.slug} article={article} />
                    </div>
                </li>
                ))
                }
                </ul>
            </div>
        
    );
};

export default ArticleList;