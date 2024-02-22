import React from "react";
import "../../style.css";
import tv_icon from "../../../../assets/images/icons/tv_icon.png";
import back from "../../../../assets/images/icons/back.png";
import { Box } from "@mui/material";
import { ol } from "./AltyazıTürü_"

export default function AltyazıTürü() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Altyazılar /
        Altyazı Türü
      </p>
      <Box className="container">
        <h1>Altyazı Türü</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            <b>İşitme Engelli</b> seçimi yapılmışsa altyazı hizmetleri ek
            açıklamalar ile sağlanır.
          </li>
        </ul>
        <ol start={ol.length+1}>
          <li>
            Önceki menüye dönmek için{" "}
            <img src={back} alt="Geri" className="inline-icon" /> veya yayına
            dönmek için <img src={tv_icon} alt="TV" className="inline-icon" />{" "}
            düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}
