import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol, ol_2 } from "./AğŞifresiniGirerekOtomatikBağlantı_";
import { Circle } from "@mui/icons-material";

export default function AğŞifresiniGirerekOtomatikBağlantı() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ağ Kurulumu / Kablosuz Ağ Ayarları / Ağ Şifresini Girerek Otomatik Bağlantı</p>
      <Box className="container">
        <h1>Ağ Şifresini Girerek Otomatik Bağlantı</h1>
        <ol>
        {ol.map((li) => {
          return ( 
            <li>{li}</li>
          )})}
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
          Kullanılabilir ağlar arasında ağınızı görüntülenmiyorsa <b>Tümünü Göster</b>‘i seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
        </ul>
        <ol start={ol.length+1}>
        {ol_2.map((li) => {
          return ( 
            <li>{li}</li>
          )})}
        </ol>
      </Box>
    </Box>
  );
}
