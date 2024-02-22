import React from "react";
import "../../style.css";
import { ol, texts } from "./ÇerezAyarları_";
import { Box } from "@mui/material";

export default function ÇerezAyarları() {
  return (
    <Box className="page">
      <p>Ana sayfa / HBBTV / HBBTV Ayarları / Çerez Ayarları</p>
      <Box className="container">
        <h1>Çerez Ayarları</h1>
        {texts.map((text) => {
          return ( 
            <p>{text}</p>
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
