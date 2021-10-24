import { Button } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import React, { Fragment } from "react";

const DesktopNav = () => {
  const navStyle = {
    marginX: 6,
    marginY: 3,
    color: "#7F88A0",
    textTransform: "capitalize",
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ ml: 4, display: "flex", alignItems: "center" }}>
        <Fragment>
          <img
            src="data:image/png;base64,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"
            alt=""
            style={{ height: 25 }}
          />
        </Fragment>
        {["Products", "Resources", "Buy Instantly"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button sx={navStyle}>{anchor}</Button>
          </React.Fragment>
        ))}
      </Box>
      <Box sx={{ mr: 4 }}>
        <Fragment>
          <Button sx={navStyle}>Log In</Button>
        </Fragment>
        <Fragment>
          <Button
            variant="contained"
            className="signup"
            sx={{ textTransform: "none" }}
            endIcon={<KeyboardArrowRightIcon />}
          >
            Sign up
          </Button>
        </Fragment>
      </Box>
    </Box>
  );
};

export default DesktopNav;
