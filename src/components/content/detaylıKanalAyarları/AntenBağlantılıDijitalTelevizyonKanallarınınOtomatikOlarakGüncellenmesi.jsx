import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./AntenBağlantılıDijitalTelevizyonKanallarınınOtomatikOlarakGüncellenmesi_";

export default function AntenBağlantılıDijitalTelevizyonKanallarınınOtomatikOlarakGüncellenmesi() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Detaylı Kanal Ayarları / Anten Bağlantılı Dijital Televizyon Kanallarının Otomatik Olarak Güncellenmesi
      </p>
      <Box className="container">
        <h1>
        Anten Bağlantılı Dijital Televizyon Kanallarının Otomatik Olarak Güncellenmesi
        </h1>
        <p>
        Güncelleme taraması ile sadece yeni ilave olan kanallar bulunur ve program listesinin sonuna kaydedilir.
        </p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
