import React from "react";
import "../style.css";
import {texts} from "./HbbTvNedir_"
import { Box } from "@mui/material";
import hbbtv from "../../../assets/images/in-page-images/hbbtv.png"

export default function HbbTvNedir() {
  return (
    <Box className="page">
      <p>Ana sayfa / HBBTV / HbbTV Nedir?</p>
      <Box className="container">
        <h1>HbbTV Nedir?</h1>
        {texts.map((text) => {
          return ( 
            <p>{text}</p>
          )})}
        <img src={hbbtv} alt="HBBTV" className="in-page-img" />
      </Box>
    </Box>
  );
}
