import React from "react";
import "../style.css";
import { Box } from "@mui/material";

export default function Bluetooth() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Çevre Talimatları ve Genel Bilgiler / Bluetooth(*) Modülü Spesifikasyonu
      </p>
      <Box className="container">
        <h1>Bluetooth (*) Modülü Spesifikasyonu</h1>
        <p classname="text">Frekans Aralığı:Çıkış Gücü (Maksimum)</p>
        <p classname="text">2400 MHz - 2483,5MHz:&lt;20dBm</p>
        <p classname="text">(*) Opsiyoneldir, her üründe bulunmaz.</p>
      </Box>
    </Box>
  );
}
