import React from "react";
import { Link } from "@reach/router";

const ArticlesList = ({ articles }) => {
  return (
    <ul className="homepage-list">
      {articles.map(article => {
        return (
          <li key={article.article_id}>
            <Link to={`/${article.article_id}`}>
              {" "}
              <h3>{article.title} </h3>{" "}
            </Link>
            <p>Topic: {article.topic} </p>
            <p>Author: {article.author} </p>
          </li>
        );
      })}
    </ul>
  );
};

export default ArticlesList;
