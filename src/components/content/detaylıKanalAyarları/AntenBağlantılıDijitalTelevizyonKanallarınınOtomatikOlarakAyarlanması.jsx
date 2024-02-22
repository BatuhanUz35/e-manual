import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./AntenBağlantılıDijitalTelevizyonKanallarınınOtomatikOlarakAyarlanması_";

export default function AntenBağlantılıDijitalTelevizyonKanallarınınOtomatikOlarakAyarlanması() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Detaylı Kanal Ayarları / Anten Bağlantılı Dijital Televizyon Kanallarının Otomatik Olarak Ayarlanması
      </p>
      <Box className="container">
        <h1>
          Anten Bağlantılı Dijital Televizyon Kanallarının Otomatik Olarak Ayarlanması
        </h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
  
}
