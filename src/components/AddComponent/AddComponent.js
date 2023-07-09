import React from "react";
import { CircularProgress, Box } from "@mui/material";
const AddComponent = ({ height = "100%", width = "100%" }) => {
  return (
    <Box
      sx={{
        height: height,
        width: width,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        border: ({ palette }) => `2px solid ${palette.divider}`,
      }}
      m={3}
    >
      <Box
        sx={{ width: "400px", display: "flex", justifyContent: "space-around" }}
      >
        <Box
          sx={{
            height: "200px",
            width: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: ({ palette }) => palette.divider,
          }}
        >
          Ad will appear here.
        </Box>
      </Box>
      <Box sx={{ position: "absolute", top: "55%", left: "45%" }}>
        <CircularProgress />
      </Box>
    </Box>
  );
};

export default AddComponent;
