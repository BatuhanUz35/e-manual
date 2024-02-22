import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./GboardAyarları_";

export default function GboardAyarları() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Cihaz Tercihleri / Klavye Ayarları / Gboard Ayarları
      </p>
      <Box className="container">
        <h1>Gboard Ayarları</h1>
        <p>Gboard klavye televizyonun yerleşik klavyesidir bu menüden ayarlarını yapabilirsiniz.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
