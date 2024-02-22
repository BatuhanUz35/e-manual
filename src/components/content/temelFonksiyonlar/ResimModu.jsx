import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./ResimModu_";

export default function ResimModu() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Resim Modu</p>
      <Box className="container">
        <h1>Resim Modu</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}

