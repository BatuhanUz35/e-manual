import React from "react";
import "../../style.css";
import { ol } from "./KayıtlıDosyalarListesindenBirKayıtOynatma_";
import { Box } from "@mui/material";


export default function KayıtlıDosyalarListesindenBirKayıtOynatma() {
  return (
    <Box className="page">
      <p>Ana sayfa / USB Kayıt / Oynatma / Kayıtlı Dosyalar Listesinden Bir Kayıt Oynatma</p>
      <Box className="container">
        <h1>Kayıtlı Dosyalar Listesinden Bir Kayıt Oynatm</h1>
        <h2>Kayıtlı Dosyalar Listesinden Bir Kayıt Seçme</h2>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
