import React from "react";
import "../../style.css";
import { texts, ol } from "./CihazKimliği_";
import { Box } from "@mui/material";

export default function CihazKimliği() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / HBBTV / HBBTV Ayarları / Cihaz Kimliği</p>
      <Box className="container">
        <h1>Cihaz Kimliği</h1>
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
