import React from "react";
import "../../style.css";
import { ol } from "./VeriOrtamıTesti_";
import { Box } from "@mui/material";


export default function VeriOrtamıTesti() {
  return (
    <Box className="page">
      <p>Ana sayfa / USB Kayıt / USB Kayıt Ayarları / Veri Ortamı Testi</p>
      <Box className="container">
        <h1>Veri Ortamı Testi</h1>
        <ol>
        {ol.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ol>
      </Box>
    </Box>
  );
}
