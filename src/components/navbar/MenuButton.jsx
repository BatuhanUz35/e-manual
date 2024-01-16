import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css"
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { Box } from "@mui/material";

function MenuButton() {

  return (
    <Box className="menu-wrapper"><MenuIcon/>Menu</Box> 
  );
}

export default withFocusable()(MenuButton);