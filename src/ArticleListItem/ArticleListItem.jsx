import React, { useState } from "react";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = (props) => {
    
    const { article, slug } = props
    const [value, setValue] = useState("Show More");

    function onToggleButton(e, value) {
        e.preventDefault();
        if (value == "Show More") {
            setValue("Show Less");
        }
        else {
            setValue("Show More");
        }
        
    }
  
    
    return (
        <article>
            <form className={styles.container}>
                <fieldset>
                    
                    {
                        value === "Show Less" ? (<div>
                            <header>
                                <h1>{article.title}</h1>

                                <time datetime={article.timeStamp}>{article.displayDate} </time>

                            </header>
                            <br />
                            <div>{article.shortText}</div>
                        </div>):
                            (<h1>{article.title}</h1>)

                    }

                    <ArticleTextToggleButton key={value} buttonText={value} onClick={onToggleButton} slug={slug}/>
                    
                    
                </fieldset>
            </form>

            
        </article>

    );
};

export default ArticleListItem;