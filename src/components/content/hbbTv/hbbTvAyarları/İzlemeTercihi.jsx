import React from "react";
import "../../style.css";
import { ol, texts } from "./İzlemeTercihi_";
import { Box } from "@mui/material";

export default function İzlemeTercihi() {
  return (
    <Box className="page">
      <p>Ana sayfa / HBBTV / HBBTV Ayarları / İzleme Tercihi</p>
      <Box className="container">
        <h1>İzleme Tercihi</h1>
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
