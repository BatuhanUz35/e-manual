import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import kablolu_ağ_bağlantısı from "../../../assets/images/in-page-images/kablolu_ağ_baplantısı.png"

export default function KabloluAğBağlantısı() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ağ Kurulumu / Kablolu Ağ Bağlantısı</p>
      <Box className="container">
        <h1>Kablolu Ağ Bağlantısı</h1>
        <p>Modemin çıkışını televizyonun <b>LAN</b> soketine Cat 5 kablo ile bağlayın.</p>
        <img src={kablolu_ağ_bağlantısı} alt="Kablolu Ağ Bağlantısı" className="in-page-img"/>
        <h2>Not:</h2>
        <ul>
          <li>
            Bağlantı kabloları ürün ile birlikte verilmez.
          </li>
        </ul>
      </Box>
    </Box>
  );
}
