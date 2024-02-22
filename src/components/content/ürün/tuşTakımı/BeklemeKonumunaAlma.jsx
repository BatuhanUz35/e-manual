import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./BeklemeKonumunaAlma_";

export default function BeklemeKonumunaAlma() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ürününüz / Tuş Takımı / Cihazın Bekleme Konumuna Alınması</p>
      <Box className="container">
        <h1>Cihazın Bekleme Konumuna Alınması</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
