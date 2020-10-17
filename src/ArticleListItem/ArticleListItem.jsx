import React from "react";

const ArticleListItem = (props) => {
    const article = props.article;
    console.log(article);
    
    
    return (
        <article>

            <header>
                <h1>{article.title}</h1>
                
                <time datetime={article.timeStamp}>{article.displayDate} </time>
                
            </header>
            <br />
            <div>{article.shortText}</div>
        </article>

    );
};

export default ArticleListItem;