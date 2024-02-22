import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./UykuZamanlayıcısı_";

export default function UykuZamanlayıcısı() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Güç Ayarları / Uyku Zamanlayıcısı</p>
      <Box className="container">
        <h1>Uyku Zamanlayıcısı</h1>
        <p>
          Uyku Zamanlayıcısı, televizyonun kapanması için bir süre ayarlayabilirsiniz. Bu süre sona erdikten sonra televizyon
          stand-by moduna geçer.
        </p>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}

