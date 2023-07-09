import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/material";

const SocialMedia = () => {
  const handleOpen = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <InstagramIcon
        fontSize="small"
        sx={{ cursor: "pointer" }}
        mr={2}
        onClick={() => handleOpen("https://www.instagram.com/")}
      />
      <LinkedInIcon
        fontSize="small"
        sx={{ cursor: "pointer" }}
        mr={2}
        onClick={() => handleOpen("https://www.linkedin.com/")}
      />
      <TwitterIcon
        fontSize="small"
        sx={{ cursor: "pointer" }}
        mr={2}
        onClick={() => handleOpen("https://twitter.com/")}
      />
    </Box>
  );
};

export default SocialMedia;
