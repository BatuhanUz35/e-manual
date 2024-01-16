import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Page from "./components/pages/Page";
import "./App.css"
import { Box } from "@mui/material";
import React, { useEffect} from "react"
import { useSelector } from "react-redux";

function App() {
  const selected_item_id = useSelector((state) => state.menu.selected_item_id);

  useEffect(() => {
    document.getElementById(selected_item_id).focus();
  }, [selected_item_id]);


  return (
    <Box>
      <Navbar className="navbar" />
      <Box className="main-container">
      <Menu className="menu" />
      <Page id="page"/>
      </Box>
    </Box>
  );
}

export default App;
