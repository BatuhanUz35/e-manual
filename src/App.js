import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Page from "./components/pages/Page";
import "./App.css"
import { Box } from "@mui/material";
import React, { useEffect } from "react"
import { useSelector } from "react-redux";

function App() {
  const focused_item = useSelector((state) => state.menu.focused_item);

  useEffect(() => {
    document.getElementById(focused_item).focus();
  }, [focused_item]);

  return (
    <Box>
      <Navbar className="navbar" />
      <Box className="main-container">
        <Menu className="menu" />
        <Page/>
      </Box>
    </Box>
  );
}

export default App;
