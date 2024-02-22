import React from "react";
import "../../style.css";
import { ol } from "./DiğerBilgileriGörüntüleme_";
import { Box } from "@mui/material";


export default function DiğerBilgileriGörüntüleme() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Cihaz Tercihleri / Hakkında / Diğer Bilgileri Görüntüleme
      </p>
      <Box className="container">
        <h1>Diğer Bilgileri Görüntüleme</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
