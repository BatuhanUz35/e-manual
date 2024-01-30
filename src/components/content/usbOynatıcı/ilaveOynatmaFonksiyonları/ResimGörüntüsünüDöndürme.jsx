import React from "react";
import "../../style.css";
import { ol } from "./ResimGörüntüsünüDöndürme_";
import { Box } from "@mui/material";

export default function ResimGörüntüsünüDöndürme() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / USB Oynatıcı / İlave Oynatma Fonksiyonları / Resim Görüntüsünü Döndürme
      </p>
      <Box className="container">
        <h1>Resim Görüntüsünü Döndürme</h1>
        <p>(yalnızca resim dosyaları).</p>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
