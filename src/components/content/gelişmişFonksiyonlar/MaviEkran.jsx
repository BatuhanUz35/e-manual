import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./MaviEkran_"

export default function MaviEkran() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Mavi Ekran</p>
      <Box className="container">
        <h1>Mavi Ekran</h1>
        <p>
          Herhangi bir TV yayın sinyali olmadığında ekran rengini mavi seçebilirsiniz.
        </p>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}

