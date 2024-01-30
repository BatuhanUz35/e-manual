import React from "react";
import "../style.css";
import {ol} from "./VideoDizinleri_"
import { Box } from "@mui/material";

export default function HbbTvKullanımı() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / HBBTV / Video Dizinleri İçin Ek Fonksiyonlar</p>
      <Box className="container">
        <h1>Video Dizinleri İçin Ek Fonksiyonlar</h1>
        <ol>
        {ol.map((text) => {
          return ( 
            <li>{text}</li>
          )})}
        </ol>
      </Box>
    </Box>
  );
}
