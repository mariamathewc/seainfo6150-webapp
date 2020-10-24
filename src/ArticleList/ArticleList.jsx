import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import styles from "./ArticleList.module.css";

const ArticleList = (props) => {
    const articles = props.articles

    return (
        <div className={styles.container} >
            <ul>
            {articles.map((article) => (
                <li key={article.slug}>
                    <div className={styles.collections} >
                        <ArticleListItem key={article.slug} article={article} slug={article.slug} />
                    </div>
                </li>
                ))
                }
                </ul>
            </div>
        
    );
};

export default ArticleList;