import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./UyduGüncellemesiİleYeniİlaveOlanDijitalKanallarınAranması_";

export default function UyduGüncellemesiİleYeniİlaveOlanDijitalKanallarınAranması() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Detaylı Kanal Ayarları / Uydu Güncellemesi ile Yeni İlave Olan Dijital Kanalların Aranması
      </p>
      <Box className="container">
        <h1>
          Uydu Güncellemesi ile Yeni İlave Olan Dijital Kanalların Aranması
        </h1>
        <p>Uydu güncelleme özelliği ile sadece yeni ilave olan kanallar bulunur ve program listesinin sonuna kaydedilir.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
