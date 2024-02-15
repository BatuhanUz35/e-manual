import React from "react";
import "../../style.css";
import { Box } from "@mui/material";

export default function HariciCihazınBeklemeKonumunaAlınması() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Harici Cihaz Kullanma / CEC (Tüketici Elektroniği Kontrolü) / Harici Cihazın Bekleme Konumuna Alınması</p>
      <Box className="container">
        <h1>Harici Cihazın Bekleme Konumuna Alınması</h1>
        <p>
          Televizyonunuz bekleme konumuna (standby) aldıktan sonra, harici cihaz açıksa bekleme konumuna geçecektir.
        </p>
        <p>
          Özellik hakkında detaylı bilgi için harici cihazınızın kullanma kılavuzunu okuyun.
        </p>
      </Box>
    </Box>
  );
}
