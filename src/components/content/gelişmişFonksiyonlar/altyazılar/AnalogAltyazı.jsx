import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./AnalogAltyazı_"

export default function AnalogAltyazı() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Altyazılar / Analog Altyazı</p>
      <Box className="container">
        <h1>Analog Altyazı</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}

