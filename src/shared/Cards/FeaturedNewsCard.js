import { Typography, Box } from "@mui/material";
import React from "react";

const FeaturedNewsCard = ({ article }) => {
  return (
    <>
      <Typography
        sx={{ textAlign: "center", fontSize: "30px", fontWeight: 800 }}
      >
        {article.title}
      </Typography>
      <Box
        component="img"
        sx={{
          height: "300px",
          width: "100%",
          objectFit: "cover",
          marginRight: "10px",
        }}
        alt="Article Image"
        src={article.image}
      />
      <Typography sx={{ fontWeight: 600 }}>{article.description}</Typography>
    </>
  );
};

export default FeaturedNewsCard;
