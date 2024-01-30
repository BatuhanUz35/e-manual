import React from "react";
import "../style.css";
import { ol } from "./HariciVeriOrtamınınÇıkarılması_";
import { Box } from "@mui/material";

export default function HariciVeriOrtamınınÇıkartılması() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / USB Oynatıcı / Harici Veri Ortamının Çıkartılması
      </p>
      <Box className="container">
        <h1>Harici Veri Ortamının Çıkartılması</h1>
        <p>Harici veri ortamını çıkarmadan önce veri ortamının bağlantısını kesin.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
