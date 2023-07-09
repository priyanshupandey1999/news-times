import { Box, Typography } from "@mui/material";
import React from "react";

const NoResultFound = ({
  height = "100%",
  width = "100%",
  imgHeight = "300px",
  imgWidth = "500px",
  isSearchApplied = false,
}) => {
  return (
    <Box sx={{ height, width }}>
      <Box sx={{ display: "flex", justifyContent: "space-around" }} pb={2}>
        <Box
          component="img"
          sx={{
            height: imgHeight,
            width: imgWidth,
            objectFit: "cover",
            marginRight: "10px",
          }}
          alt="Article Image"
          src={
            "https://cdni.iconscout.com/illustration/premium/thumb/error-404-4344461-3613889.png"
          }
        />
      </Box>
      <Typography sx={{ display: "flex", justifyContent: "center" }}>
        {isSearchApplied
          ? "No Data Found for searched Text"
          : "No Data Available"}
      </Typography>
    </Box>
  );
};

export default NoResultFound;
