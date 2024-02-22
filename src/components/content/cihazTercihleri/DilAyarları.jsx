import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./DilAyarları_";

export default function DilAyarları() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Cihaz Tercihleri / Dil Ayarları
      </p>
      <Box className="container">
        <h1>Dil Ayarları</h1>
        <p>Bu menüde televizyon dil ayarlarını yönetebilirsiniz.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
