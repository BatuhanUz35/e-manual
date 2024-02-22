import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./SayfaDeşifreEtmeDili_"

export default function SayfaDeşifreEtmeDili() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Teleteks Dil Seçimi / Sayfa Deşifre Etme Dili</p>
      <Box className="container">
        <h1>Sayfa Deşifre Etme Dili</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}

