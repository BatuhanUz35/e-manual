import React from "react";
import "../../style.css";
import { ol } from "./CihazKimliğiniSıfırlama_";
import { Box } from "@mui/material";

export default function CihazKimliğiniSıfırlama() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / HBBTV / HBBTV Ayarları / Cihaz Kimliğini Sıfırlama</p>
      <Box className="container">
        <h1>Cihaz Kimliğini Sıfırlama</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
