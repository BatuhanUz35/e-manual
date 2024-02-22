import React from "react";
import "../../style.css";
import { ol } from "./UygulamaVerileriniTemizleme_";
import { Box } from "@mui/material";

export default function UygulamaVerileriniTemizleme() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Android TV / Uygulama Ayarları / Uygulama Verilerini Temizleme
      </p>
      <Box className="container">
        <h1>Uygulama Verilerini Temizleme</h1>
        <p>
        Uygulama verilerini silebilirsiniz.
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
