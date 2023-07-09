import React from "react";
import LatestNewsCard from "../../shared/Cards/LatestNewsCard";
import { Box } from "@mui/material";

const LatestNewsList = ({ articles }) => {
  const slicedArticles = articles.slice(0, 7);
  return (
    <Box>
      {slicedArticles.map((article, index) => (
        <LatestNewsCard key={`Latest-News-${index}`} article={article} />
      ))}
    </Box>
  );
};

export default LatestNewsList;
