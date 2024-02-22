import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ul } from "./KablosuzAğBağlantısı_";
import kablosuz_ağ_bağlantısı from "../../../assets/images/in-page-images/kablosuz_ağ_bağlantısı.png"

export default function KablosuzAğBağlantısı() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ağ Kurulumu / Kablosuz Ağ Bağlantısı</p>
      <Box className="container">
        <h1>Kablosuz Ağ Bağlantısı</h1>
        <img src={kablosuz_ağ_bağlantısı} alt="Kablolu Ağ Bağlantısı" className="in-page-img"/>
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
