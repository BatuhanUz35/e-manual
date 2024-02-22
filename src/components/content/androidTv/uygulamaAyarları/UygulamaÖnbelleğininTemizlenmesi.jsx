import React from "react";
import "../../style.css";
import { ol } from "./UygulamaÖnbelleğininTemizlenmesi_";
import { Box } from "@mui/material";

export default function UygulamaÖnbelleğininTemizlenmesi() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Android TV / Uygulama Ayarları / Uygulama Önbelleğinin Temizlenmesi
      </p>
      <Box className="container">
        <h1>Uygulama Önbelleğinin Temizlenmesi</h1>
        <p>
        Uygulama önbelleğini silebilirsiniz.
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
