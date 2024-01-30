import React from "react";
import "../../style.css";
import { ol, notlar } from "./KayıtZamanKaydırmaİçinVeriOrtamınınSeçilmesi_";
import { Box } from "@mui/material";


export default function KayıtZamanKaydırmaİçinVeriOrtamınınSeçilmesi() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / USB Kayıt / USB Kayıt Ayarları / Kayıt - Zaman Kaydırma İçin Veri Ortamının Seçilmesi</p>
      <Box className="container">
        <h1>Kayıt - Zaman Kaydırma İçin Veri Ortamının Seçilmesi</h1>
        <p classname="text">Televizyona birden fazla harici veri ortamı takılmış ise farklı veri ortamlarını kayıt - zaman kaydırma için ayarlayabilir
          veya her iki kaydı tek bir veri ortamına atayabilirsiniz.
        </p>
        <ol>
        {ol.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ol>
        <h2>Notlar:</h2>
        <ul>
        {notlar.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ul>
      </Box>
    </Box>
  );
}
