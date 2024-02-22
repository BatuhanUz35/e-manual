import React from "react";
import "../style.css";
import { Box } from "@mui/material";

export default function Bluetooth() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Çevre Talimatları ve Genel Bilgiler / Bluetooth(*) Modülü Spesifikasyonu
      </p>
      <Box className="container">
        <h1>Bluetooth (*) Modülü Spesifikasyonu</h1>
        <p>Frekans Aralığı:Çıkış Gücü (Maksimum)</p>
        <p>2400 MHz - 2483,5MHz:&lt;20dBm</p>
        <p>(*) Opsiyoneldir, her üründe bulunmaz.</p>
      </Box>
    </Box>
  );
}
