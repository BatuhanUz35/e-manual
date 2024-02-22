import React from "react";
import "../../style.css";
import { Box } from "@mui/material";

export default function MenüDilininSeçilmesi() {
  return (
    <Box className="page">
      <p>Ana sayfa / Harici Cihaz Kullanma / CEC (Tüketici Elektroniği Kontrolü) / Menü Dilinin Seçilmesi</p>
      <Box className="container">
        <h1>Menü Dilinin Seçilmesi</h1>
        <p>
          Televizyonun menü dilini değiştirildiğine harici cihazınızın da menü dili değişir. (Harici Cihaz destekliyorsa).
        </p>
      </Box>
    </Box>
  );
}
