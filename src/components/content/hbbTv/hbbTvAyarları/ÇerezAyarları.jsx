import React from "react";
import "../../style.css";
import { ol, texts } from "./ÇerezAyarları_";
import { Box } from "@mui/material";

export default function ÇerezAyarları() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / HBBTV / HBBTV Ayarları / Çerez Ayarları</p>
      <Box className="container">
        <h1>Çerez Ayarları</h1>
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
