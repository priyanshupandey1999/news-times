import React from "react";
import LiveNewsCard from "../../shared/Cards/LiveNewsCard";
import { Box } from "@mui/material";

const LiveNewsList = ({ categorySpecificArticles }) => {
  const completeArticle = categorySpecificArticles
    .filter(
      (article) =>
        article.image !== null &&
        article.author !== null &&
        article.description !== null &&
        article.source !== null &&
        article.url !== null
    )
    .slice(0, 3);
  return (
    <Box>
      {completeArticle.map((article, index) => {
        return (
          <LiveNewsCard
            article={article}
            key={`Live-News-${article.category}-${index}`}
          />
        );
      })}
    </Box>
  );
};

export default LiveNewsList;
