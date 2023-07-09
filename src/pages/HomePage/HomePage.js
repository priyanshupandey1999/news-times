import React, { useState, useEffect, useMemo } from "react";
import HeaderTabs from "../../components/HeaderTabs/HeaderTabs";
import mockData from "./mockData";
import { tabList } from "../../Constant/Constant";
import { TextField, Box } from "@mui/material";
import NewsParentComponent from "../../components/NewsParentComponent/NewsParentComponent";
import useDebounce from "../../hooks/useDebounce";

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(tabList[0]);
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState(mockData);
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const debouncedSearchTerm = useDebounce(searchValue, 500);

  useEffect(() => {
    const searchFilteredArticles =
      debouncedSearchTerm !== ""
        ? articles.filter((article) =>
            article.title
              .toLowerCase()
              .includes(debouncedSearchTerm.toLowerCase())
          )
        : articles;
    setFilteredArticles(searchFilteredArticles);
  }, [debouncedSearchTerm]);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <HeaderTabs
          tabList={tabList}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <TextField
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          sx={{
            mr: 2,
            mt: 1,
            height: "50px",
            "& .MuiInputBase-input": {
              height: "35px",
              p: 0,
              pl: 1,
            },
          }}
        />
      </Box>
      <Box>
        <NewsParentComponent
          articleList={filteredArticles}
          category={selectedTab}
          debouncedSearchTerm={debouncedSearchTerm}
        />
      </Box>
    </>
  );
};

export default HomePage;
