import React from "react";
import "../../style.css";
import { ol } from "./TekrarlamaFonksiyonu_";
import { Box } from "@mui/material";

export default function VideoDosyalarındaİstenilenSüreyeGitme() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / USB Oynatıcı / İlave Oynatma Fonksiyonları / Tekrarlama Fonksiyonu
      </p>
      <Box className="container">
        <h1>Tekrarlama Fonksiyonu</h1>
        <p>(yalnızca video ve ses dosyaları)</p>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
