import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./YenidenBaşlatma_";

export default function YenidenBaşlatma() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Cihaz Tercihleri / Yeniden Başlatma
      </p>
      <Box className="container">
        <h1>Yeniden Başlatma</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
