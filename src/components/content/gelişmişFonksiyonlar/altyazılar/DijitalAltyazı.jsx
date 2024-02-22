import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./DijitalAltyazı_"

export default function DijitalAltyazı() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Altyazılar / Dijital Altyazı</p>
      <Box className="container">
        <h1>Dijital Altyazı</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}

