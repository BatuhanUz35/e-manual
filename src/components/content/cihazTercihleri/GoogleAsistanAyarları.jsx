import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./GoogleAsistanAyarları_";

export default function GoogleAsistanAyarları() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Cihaz Tercihleri / Google Asistan Ayarları
      </p>
      <Box className="container">
        <h1>Google Asistan Ayarları</h1>
        <p>Bu menüde Google Asistan ayarlarını yönetebilirsiniz.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
