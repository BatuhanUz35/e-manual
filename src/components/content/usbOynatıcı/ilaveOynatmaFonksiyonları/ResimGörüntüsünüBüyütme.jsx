import React from "react";
import "../../style.css";
import { ol } from "./ResimGörüntüsünüBüyütme_";
import { Box } from "@mui/material";

export default function ResimGörüntüsünüBüyütme() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / USB Oynatıcı / İlave Oynatma Fonksiyonları / Resim Görüntüsünü Büyütme (Zoom)
      </p>
      <Box className="container">
        <h1>Resim Görüntüsünü Büyütme (Zoom)</h1>
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
