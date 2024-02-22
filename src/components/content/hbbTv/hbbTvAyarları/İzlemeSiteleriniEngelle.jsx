import React from "react";
import "../../style.css";
import { texts, ol } from "./İzlemeSiteleriniEngelle_";
import { Box } from "@mui/material";

export default function İzlemeSiteleriniEngelle() {
  return (
    <Box className="page">
      <p>Ana sayfa / HBBTV / HBBTV Ayarları / İzleme Sitelerini Engelle</p>
      <Box className="container">
        <h1>İzleme Sitelerini Engelle</h1>
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
