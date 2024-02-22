import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./GizliBirKablosuzAğaBağlantı_";

export default function GizliBirKablosuzAğaBağlantı() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ağ Kurulumu / Kablosuz Ağ Ayarları / Gizli Bir Kablosuz Ağa Bağlantı</p>
      <Box className="container">
        <h1>Gizli Bir Kablosuz Ağa Bağlantı</h1>
        <p>
          SSID’si gizli bir ağa bağlanabilirsiniz.
        </p>
        <ol>
        {ol.map((li) => {
          return ( 
            <li>{li}</li>
          )})}
        </ol>
      </Box>
    </Box>
  );
}
