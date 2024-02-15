import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./BirTelevizyonaKanalınıEngelleme_";

export default function BirTelevizyonaKanalınıEngelleme() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Ebeveyn Ayarları / Bir Televizyon Kanalını Engelleme
      </p>
      <Box className="container">
        <h1>Bir Televizyon Kanalını Engelleme</h1>
        <p>Çocuklar için uygun olmayan televizyon kanallarını kişisel PIN kodunu kullanarak engelleyin.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
