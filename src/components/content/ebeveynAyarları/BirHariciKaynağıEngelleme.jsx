import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./BirHariciKaynağıEngelleme_";

export default function BirHariciKaynağıEngelleme() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Ebeveyn Ayarları / Bir Harici Kaynağı Engelleme
      </p>
      <Box className="container">
        <h1>Bir Harici Kaynağı Engelleme</h1>
        <p>Harici kaynakları kişisel PIN kodunu kullanarak engelleyin.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
