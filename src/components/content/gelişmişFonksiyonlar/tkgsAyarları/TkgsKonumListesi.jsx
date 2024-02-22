import React from "react";
import "../../style.css";
import tv_icon from "../../../../assets/images/icons/tv_icon.png";
import back from "../../../../assets/images/icons/back.png";
import { Box } from "@mui/material";
import { ol } from "./TkgsKonumListesi_"

export default function TkgsKonumListesi() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / TKGS Ayarları / TKGS Konum Listesi</p>
      <Box className="container">
        <h1>TKGS Konum Listesi</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            TKGS konum listesi için birden fazla frekans girilebilir. Farklı frekanslar eklemek için 2 ila 11. adımları tekrarlayın.
          </li>
        </ul>
        <ol start={ol.length+1}>
          <li>
            Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon"/> veya
            yayına dönmek için <img src={tv_icon} alt="TV" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}

