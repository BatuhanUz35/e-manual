import React from "react";
import "../../style.css";
import { ol, texts } from "./KalıcıDepolama_";
import { Box } from "@mui/material";

export default function KalıcıDepolama() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / HBBTV / HBBTV Ayarları / Kalıcı Depolama</p>
      <Box className="container">
        <h1>Kalıcı Depolama</h1>
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
