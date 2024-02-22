import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./AntenBağlantılıAnalogTelevizyonKanallarınınManuelOlarakAyarlanması_";

export default function AntenBağlantılıAnalogTelevizyonKanallarınınManuelOlarakAyarlanması() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Detaylı Kanal Ayarları / Anten Bağlantılı Analog Televizyon Kanallarının Manuel Olarak Ayarlanması
      </p>
      <Box className="container">
        <h1>
        Anten Bağlantılı Analog Televizyon Kanallarının Manuel Olarak Ayarlanması
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
