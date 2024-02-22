import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./İkinciDijitalAltyazıDili_"

export default function İkinciDijitalAltyazıDili() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Altyazılar / İkinci Dijital Altyazı Dili</p>
      <Box className="container">
        <h1>İkinci Dijital Altyazı Dili</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}

