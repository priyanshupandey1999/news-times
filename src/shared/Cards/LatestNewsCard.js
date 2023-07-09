import { Box, Typography } from "@mui/material";
import React from "react";

const LatestNewsCard = ({ article }) => {
  return (
    <Box
      pb={1}
      mb={2}
      sx={{ borderBottom: ({ palette }) => `2px solid ${palette.divider}` }}
    >
      <Typography>{article.title}</Typography>
    </Box>
  );
};

export default LatestNewsCard;
