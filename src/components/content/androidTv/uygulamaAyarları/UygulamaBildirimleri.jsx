import React from "react";
import "../../style.css";
import { ol } from "./UygulamaBildirimleri_";
import { Box } from "@mui/material";

export default function UygulamaBildirimleri() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Android TV / Uygulama Ayarları / Uygulama Bildirimleri
      </p>
      <Box className="container">
        <h1>Uygulama Bildirimleri</h1>
        <p>
        Uygulama bildirimlerini kapatıp açabilirsiniz.
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
