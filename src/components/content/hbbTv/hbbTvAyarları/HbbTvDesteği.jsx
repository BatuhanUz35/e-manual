import React from "react";
import "../../style.css";
import { texts, ol } from "./HbbTvDesteği_";
import { Box } from "@mui/material";

export default function HbbTvDesteği() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / HBBTV / HBBTV Ayarları / HBBTV Desteği</p>
      <Box className="container">
        <h1>HBBTV Desteği</h1>
        {texts.map((text) => {
          return ( 
            <p classname="text">{text}</p>
          )})}
          <ol>
          {ol.map((li) => {
          return ( 
            <li>{li}</li>
          )})}  
          </ol>
      </Box>
    </Box>
  );
}
