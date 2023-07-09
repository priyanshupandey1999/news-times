import React from "react";
import AllArticlesComponent from "../AllArticlesComponent/AllArticlesComponent";
import SpecificCategoryArticle from "../SpecificCategoryArticle/SpecificCategoryArticle";

const NewsParentComponent = ({
  articleList,
  category,
  debouncedSearchTerm,
}) => {
  const { id: categoryId } = category;

  switch (categoryId) {
    case "general":
      return (
        <AllArticlesComponent
          articleList={articleList}
          debouncedSearchTerm={debouncedSearchTerm}
        />
      );
    default:
      return (
        <SpecificCategoryArticle
          articleList={articleList}
          category={category}
          debouncedSearchTerm={debouncedSearchTerm}
        />
      );
  }
};

export default NewsParentComponent;
