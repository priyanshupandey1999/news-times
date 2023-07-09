import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { randomInRange } from "./../../Utility/utility";

const TrendingArticleCard = ({ article }) => {
  return (
    <Box sx={{ display: "flex" }} mb={2}>
      <Box
        component="img"
        sx={{
          height: "100px",
          width: "100px",
          objectFit: "cover",
          marginRight: "10px",
        }}
        alt="Article Image"
        src={article.image}
      />
      <Box sx={{ width: "100%" }}>
        <Typography sx={{ maxWidth: "600px" }}>{article.title}</Typography>
        {article.source ? (
          <Typography sx={{ fontSize: "13px" }}>{article.source}</Typography>
        ) : (
          <Box />
        )}
        <Typography sx={{ fontSize: "12px", color: "gray" }} py={1}>
          Updated: {article.published_at.slice(0, 10)}
        </Typography>
        <Divider />
        <Box sx={{ display: "flex" }} pt={1}>
          <Typography sx={{ fontSize: "13px" }} mr={1}>
            Share Trending On:{" "}
          </Typography>
          <SocialMedia />
          <Typography sx={{ fontSize: "13px" }} ml={2} mr={1}>
            {randomInRange(10, 1000)}
          </Typography>
          <VisibilityOutlinedIcon fontSize="small" />
        </Box>
      </Box>
    </Box>
  );
};

export default TrendingArticleCard;
