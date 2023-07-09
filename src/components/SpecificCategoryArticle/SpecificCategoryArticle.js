import React from "react";
import { Box, Typography } from "@mui/material";
import TrendingArticleList from "../TrendingArticleList/TrendingArticleList";
import LiveNewsList from "../LiveNewsList/LiveNewsList";
import GeneralArticleList from "../GeneralArticleList/GeneralArticleList";
import NoResultFound from "../NoResultFound/NoResultFound";

const SpecificCategoryArticle = ({
  articleList,
  category,
  debouncedSearchTerm,
}) => {
  const categorySpecificArticles = articleList.filter(
    (article) => article.category === category.label.toLowerCase()
  );

  return (
    <Box>
      <Box p={3} sx={{ display: "flex" }}>
        <Box>
          <Typography pb={2} sx={{ fontSize: "18px" }}>
            Trending
          </Typography>
          {categorySpecificArticles.length > 0 ? (
            <TrendingArticleList
              categorySpecificArticles={categorySpecificArticles}
            />
          ) : (
            <NoResultFound isSearchApplied={debouncedSearchTerm !== ""} />
          )}
        </Box>
        <Box>
          <Typography pb={2} sx={{ fontSize: "18px" }}>
            Live News
          </Typography>
          {categorySpecificArticles.length > 0 ? (
            <LiveNewsList categorySpecificArticles={categorySpecificArticles} />
          ) : (
            <NoResultFound isSearchApplied={debouncedSearchTerm !== ""} />
          )}
        </Box>
      </Box>
      <Box mt={10} p={3}>
        <Typography pb={2} sx={{ fontSize: "18px" }}>
          Latest News
        </Typography>
        {categorySpecificArticles.length > 0 ? (
          <GeneralArticleList
            categorySpecificArticles={categorySpecificArticles}
          />
        ) : (
          <NoResultFound isSearchApplied={debouncedSearchTerm !== ""} />
        )}
      </Box>
    </Box>
  );
};

export default SpecificCategoryArticle;
