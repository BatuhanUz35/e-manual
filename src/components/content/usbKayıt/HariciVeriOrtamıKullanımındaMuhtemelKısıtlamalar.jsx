import React from "react";
import "../style.css";
import { ul } from "./HariciVeriOrtamıKullanımındaMuhtemelKısıtlamalar_";
import { Box } from "@mui/material";

export default function HariciVeriOrtamıKullanımındaMuhtemelKısıtlamalar() {
  return (
    <Box className="page">
      <p>Ana sayfa / USB Kayıt / Harici Veri Ortamı Kullanımında Muhtemel Kısıtlamalar</p>
      <Box className="container">
        <h1>Harici Veri Ortamı Kullanımında Muhtemel Kısıtlamalar</h1>
        <ul>
        {ul.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ul>
      </Box>
    </Box>
  );
}
