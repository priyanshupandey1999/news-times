import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ThemeSetter from "../../shared/ThemeSetter/ThemeSetter";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 1,
          background: ({ palette }) => palette.background.header,
          backdropFilter: "blur(3px)",
        }}
      >
        <Typography pl={3}>Logo</Typography>
        <Box sx={{ display: "flex" }}>
          <Button>SignUp</Button>
          <ThemeSetter />
        </Box>
      </Box>
    </>
  );
};

export default Header;
