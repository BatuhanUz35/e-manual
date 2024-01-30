import React from "react";
import "../style.css";
import tv_icon from "../../../assets/images/icons/tv_icon.png"
import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";


export default function SesAyarları() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Açma ve Kapatma</p>
      <Box className="container">
        <h1>Açma ve Kapatma</h1>
        <ol>
          <li>
            <b>Home</b> menü <b>Uygulamalar</b> sekmesinden <b>TV</b> uygulamasını 
            seçip <Circle className="inline-icon button"/> düğmesine basın veya 
            kumandadan <img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}
