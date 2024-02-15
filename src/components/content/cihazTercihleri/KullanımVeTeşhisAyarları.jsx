import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./KullanımVeTeşhisAyarları_";

export default function KullanımVeTeşhisAyarları() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Cihaz Tercihleri / Kullanım ve Teşhis Ayarları
      </p>
      <Box className="container">
        <h1>Kullanım ve Teşhis Ayarları</h1>
        <p>Kilitlenme raporları, cihaz, uygulama ve tümleşik chromecast verileri gibi teşhis verilerini otomatik olarak Google'a gönderilmesini sağlayabilirsiniz.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
