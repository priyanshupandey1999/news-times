import { Box, Typography } from "@mui/material";
import React from "react";
import FeaturedNewsCard from "../../shared/Cards/FeaturedNewsCard";
import LatestNewsList from "../LatestNewsList/LatestNewsList";
import TrendingArticleList from "../TrendingArticleList/TrendingArticleList";
import GeneralArticleList from "../GeneralArticleList/GeneralArticleList";
import AddComponent from "../AddComponent/AddComponent";
import NoResultFound from "./../NoResultFound/NoResultFound";

const AllArticlesComponent = ({ articleList, debouncedSearchTerm }) => {
  const articles = articleList.filter((article) => article.image !== null);
  return (
    <>
      <Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "600px" }} pl={3}>
            {articles[0]?.image ? (
              <FeaturedNewsCard article={articles[0]} />
            ) : (
              <NoResultFound isSearchApplied={debouncedSearchTerm !== ""} />
            )}
          </Box>
          <Box ml={3} sx={{ width: "500px" }}>
            <Typography sx={{ fontWeight: 600, fontSize: "20px" }} pb={1}>
              Latest News
            </Typography>
            {articles.length > 0 ? (
              <LatestNewsList articles={articles} />
            ) : (
              <NoResultFound isSearchApplied={debouncedSearchTerm !== ""} />
            )}
          </Box>
          <Box>
            <AddComponent width="400px" />
          </Box>
        </Box>
        {articles.length > 0 ? (
          <Box sx={{ display: "flex" }} pt={5} px={3}>
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: "20px" }} pb={1}>
                Trending News
              </Typography>
              <TrendingArticleList
                categorySpecificArticles={articles.slice(0, 5)}
              />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: "20px" }} pb={1}>
                Most Viewed News
              </Typography>
              <TrendingArticleList
                categorySpecificArticles={articles.slice(0, 5)}
              />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: "20px" }} pb={1}>
                Local News
              </Typography>
              <TrendingArticleList
                categorySpecificArticles={articles.slice(0, 5)}
              />
            </Box>
          </Box>
        ) : (
          <NoResultFound isSearchApplied={debouncedSearchTerm !== ""} />
        )}
        <Box>
          <Typography pl={3} sx={{ fontWeight: 600, fontSize: "20px" }} pb={1}>
            Don't Miss
          </Typography>
          {articles.length > 0 ? (
            <GeneralArticleList categorySpecificArticles={articles} />
          ) : (
            <NoResultFound isSearchApplied={debouncedSearchTerm !== ""} />
          )}
        </Box>
      </Box>
    </>
  );
};

export default AllArticlesComponent;
