import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import React from "react";

const GeneralCard = ({ article }) => {
  return (
    <Box mx={3} mb={2}>
      <Card sx={{ maxWidth: 310 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={article.image}
          title="green iguana"
        />
        <CardContent>
          <Typography sx={{ height: "50px" }}>{article.title}</Typography>
          <Typography
            sx={{ fontSize: "13px", lineHeight: "15px", color: "#e3e3e3" }}
            pt={2}
            pb={1}
          >
            {article.description.length > 80
              ? `${article.description.slice(0, 80)}...`
              : article.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default GeneralCard;
