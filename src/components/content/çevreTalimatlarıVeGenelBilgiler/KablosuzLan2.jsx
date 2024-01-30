import React from "react";
import "../style.css";
import { Box } from "@mui/material";

export default function KablosuzLan2() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Çevre Talimatları ve Genel Bilgiler / Kablosuz LAN Modülü Spesifikasyonu
      </p>
      <Box className="container">
        <h1>Kablosuz LAN Modülü Spesifikasyonu</h1>
        <p classname="text">Standart: IEEE802. 11a/n/ac</p>
        <p classname="text">Frekans Aralığı:Çıkış Gücü (Maksimum)</p>
        <p classname="text">5150 MHz - 5250,5MHz:&lt;23dBm</p>
        <p classname="text">5250 MHz - 5350,5MHz:&lt;23dBm</p>
        <p classname="text">5725 MHz - 5850,5MHz:&lt;23dBm</p>
      </Box>
    </Box>
  );
}
