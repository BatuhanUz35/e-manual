import React from "react";
import "../style.css";
import { Box } from "@mui/material";

export default function KablosuzLan1() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Çevre Talimatları ve Genel Bilgiler / Kablosuz LAN Modülü Spesifikasyonu
      </p>
      <Box className="container">
        <h1>Kablosuz LAN Modülü Spesifikasyonu</h1>
        <p classname="text">Standart: IEEE802. 11b/g/n</p>
        <p classname="text">Frekans Aralığı:Çıkış Gücü (Maksimum)</p>
        <p classname="text">2400 MHz - 2483,5MHz:&lt;20dBm</p>
      </Box>
    </Box>
  );
}
