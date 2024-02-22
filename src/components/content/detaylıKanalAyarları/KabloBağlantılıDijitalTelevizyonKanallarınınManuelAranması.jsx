import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./KabloBağlantılıDijitalTelevizyonKanallarınınManuelAranması_";

export default function KabloBağlantılıDijitalTelevizyonKanallarınınManuelAranması() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Detaylı Kanal Ayarları / Kablo Bağlantılı Dijital Televizyon Kanallarının Manuel Aranması
      </p>
      <Box className="container">
        <h1>
          Kablo Bağlantılı Dijital Televizyon Kanallarının Manuel Aranması
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
