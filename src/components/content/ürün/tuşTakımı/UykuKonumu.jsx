import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./UykuKonumu_";

export default function UykuKonumu() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ürününüz / Tuş Takımı / Cihazın Uyku Konumuna Alınması ve Açılması</p>
      <Box className="container">
        <h1>Cihazın Uyku Konumuna Alınması ve Açılması</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
