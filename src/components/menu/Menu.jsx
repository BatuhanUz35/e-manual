import "./Menu.css";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import React from "react"
import MenuItem from "./MenuItem";

const Menu = () => {
  const is_menu_active = useSelector((state) => state.menu.toggle);

  return (
    <Box className="menu" style={is_menu_active ? {} : { display: "none" }}>
      <Box className="item-list">
        <MenuItem/>
      </Box>
    </Box>
  );
}


export default withFocusable()(Menu);
