import React from "react";
import styles from "./ArticleTextToggleButton.module.css";

const ArticleTextToggleButton = (props) => {

    const { buttonText, onClick, slug } = props
   

    return (
        <div >
            <label >
                <button
                    className={styles.btn}
                    id={slug}
                    onClick={(e) => onClick(e, buttonText)}
                >
                    {buttonText}
                </button>
            </label>
        </div>

    );
};

export default ArticleTextToggleButton;