import React from "react";
import { Tab, Box } from "@mui/material";

const HeaderTabs = ({ tabList, selectedTab, setSelectedTab }) => {
  const { id: selectedTabId } = selectedTab;
  const handleTabSelection = (e, tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        {tabList.map((tab) => {
          const { id, label } = tab;
          return (
            <Tab
              key={id}
              label={label}
              disableRipple={true}
              sx={{
                ...(selectedTabId === id && {
                  color: ({ palette }) => palette.text.tab,
                  opacity: 1,
                }),
              }}
              onClick={(e) => handleTabSelection(e, tab)}
            ></Tab>
          );
        })}
      </Box>
    </>
  );
};

export default HeaderTabs;
