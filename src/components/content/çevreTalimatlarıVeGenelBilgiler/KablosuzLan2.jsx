import React from "react";
import "../style.css";
import { Box } from "@mui/material";

export default function KablosuzLan2() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Çevre Talimatları ve Genel Bilgiler / Kablosuz LAN Modülü Spesifikasyonu
      </p>
      <Box className="container">
        <h1>Kablosuz LAN Modülü Spesifikasyonu</h1>
        <p>Standart: IEEE802. 11a/n/ac</p>
        <p>Frekans Aralığı:Çıkış Gücü (Maksimum)</p>
        <p>5150 MHz - 5250,5MHz:&lt;23dBm</p>
        <p>5250 MHz - 5350,5MHz:&lt;23dBm</p>
        <p>5725 MHz - 5850,5MHz:&lt;23dBm</p>
      </Box>
    </Box>
  );
}
