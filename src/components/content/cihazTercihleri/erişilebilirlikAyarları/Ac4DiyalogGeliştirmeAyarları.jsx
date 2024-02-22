import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./Ac4DiyalogGeliştirmeAyarları_";

export default function Ac4DiyalogGeliştirmeAyarları() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Cihaz Tercihleri / Erişilebilirlik Ayarları / AC4 Diyalog Geliştirme Ayarları
      </p>
      <Box className="container">
        <h1>AC4 Diyalog Geliştirme Ayarları</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
