import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./KonumAyarları_";
import home from "../../../assets/images/icons/home.png";
import back from "../../../assets/images/icons/back.png";

export default function KonumAyarları() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Cihaz Tercihleri / Konum Ayarları
      </p>
      <Box className="container">
        <h1>Konum Ayarları</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            Menüde ayrıca son konum istekleri yapan uygulamaları da görüntüleyebilir, uygulamayı seçerek uygulama 
            ayarlarından uygulamanın konum servisini kapatabilirsiniz.
          </li>
        </ul>
        <ol start={ol.length+1}>
          <li>
            Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home
            menüsüne dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}
