import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleImage.module.css";

const ArticleImage = (props) => {
    return (
        <div >
            <img className={styles.picture} src={props.url} alt={props.title} width="200" height="150" />

            </div>
    );
};

ArticleImage.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    
};
export default ArticleImage;