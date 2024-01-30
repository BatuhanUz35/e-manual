import React from "react";
import "../style.css";
import {texts} from "./HbbTvNedir_"
import { Box } from "@mui/material";

export default function HbbTvNedir() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / HBBTV / HbbTV Nedir?</p>
      <Box className="container">
        <h1>HbbTV Nedir?</h1>
        {texts.map((text) => {
          return ( 
            <p classname="text">{text}</p>
          )})}
        <h2>img gelcek</h2>
      </Box>
    </Box>
  );
}
