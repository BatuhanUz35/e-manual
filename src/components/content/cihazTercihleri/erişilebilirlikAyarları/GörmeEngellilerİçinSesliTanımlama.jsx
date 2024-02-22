import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./GörmeEngellilerİçinSesliTanımlama_";

export default function GörmeEngellilerİçinSesliTanımlama() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Cihaz Tercihleri / Erişilebilirlik Ayarları / Görme Engelliler için Sesli Tanımlama
      </p>
      <Box className="container">
        <h1>Görme Engelliler için Sesli Tanımlama</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
