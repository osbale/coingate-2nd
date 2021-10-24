import {Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import "./Navigation.css";

const Navigation = () => {
  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        boxShadow: "0px 5px 11px rgba(29, 0, 62, 0.07);",
      }}
    >
      <Box className="desktopNav">
        <DesktopNav />
      </Box>
      <Box className="mobileNav">
        <MobileNav />
      </Box>
    </Toolbar>
  );
};

export default Navigation;
