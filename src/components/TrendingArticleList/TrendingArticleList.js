import { Box } from "@mui/material";
import React from "react";
import TrendingArticleCard from "../../shared/Cards/TrendingArticleCard";

const TRENDING_LIMIT = 10;

const TrendingArticleList = ({ categorySpecificArticles }) => {
  const articleList = categorySpecificArticles
    .filter((article) => article.image)
    .slice(0, TRENDING_LIMIT);

  return (
    <Box>
      {articleList.map((article, id) => (
        <TrendingArticleCard
          key={`${article.category}-${id}`}
          article={article}
        />
      ))}
    </Box>
  );
};

export default TrendingArticleList;
