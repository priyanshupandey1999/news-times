import { Box, Typography } from "@mui/material";
import React from "react";

const LiveNewsCard = ({ article }) => {
  return (
    <Box sx={{ width: "500px" }} m={2} mb={3}>
      <Box
        component="img"
        sx={{
          height: "300px",
          width: "500px",
          objectFit: "cover",
          marginRight: "10px",
        }}
        alt="Article Image"
        src={article.image}
      />
      <Typography sx={{ fontSize: "12px", color: "gray" }}>
        {article.source}
      </Typography>
      <Typography>{article.title}</Typography>
      <Typography
        sx={{ fontSize: "13px", lineHeight: "15px", color: "#e3e3e3" }}
        pt={2}
        pb={1}
      >
        {article.description}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: "12px", color: "gray" }}>
          {article.published_at.slice(0, 10)}
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "gray" }}>
          Author: {article.author}
        </Typography>
      </Box>
    </Box>
  );
};

export default LiveNewsCard;
