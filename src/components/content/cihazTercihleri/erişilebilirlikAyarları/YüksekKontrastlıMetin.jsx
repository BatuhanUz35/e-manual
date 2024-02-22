import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./YüksekKontrastlıMetin_";

export default function YüksekKontrastlıMetin() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Cihaz Tercihleri / Erişilebilirlik Ayarları / Yüksek Kontrastlı Metin
      </p>
      <Box className="container">
        <h1>Yüksek Kontrastlı Metin</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
