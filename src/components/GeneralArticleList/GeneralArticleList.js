import React from "react";
import GeneralCard from "../../shared/Cards/GeneralCard";
import { Box } from "@mui/material";

const GeneralArticleList = ({ categorySpecificArticles }) => {
  const newArticleList = categorySpecificArticles.filter(
    (article) => article.image !== null
  );
  const slicedList = newArticleList.slice(10, newArticleList.length);
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {slicedList.map((article, index) => {
        return (
          <GeneralCard
            key={`General-${article.category}-${index}`}
            article={article}
          />
        );
      })}
    </Box>
  );
};

export default GeneralArticleList;
