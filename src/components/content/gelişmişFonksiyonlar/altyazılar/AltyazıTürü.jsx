import React from "react";
import "../../style.css";
import tv_icon from "../../../../assets/images/icons/tv_icon.png";
import back from "../../../../assets/images/icons/back.png";
import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function AltyazıTürü() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Altyazılar /
        Altyazı Türü
      </p>
      <Box className="container">
        <h1>Altyazı Türü</h1>
        <ol>
          <li>
            <b>Altyazı</b> menüsünden <b>Altyazı Türü</b>'nü seçip{" "}
            <Circle className="inline-icon button" /> düğmesine basın.
          </li>
          <li>
            <b>Normal</b> veya <b>İşitme Engelli</b> seçimini yapıp{" "}
            <Circle className="inline-icon button" /> düğmesine basın.
          </li>
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            <b>İşitme Engelli</b> seçimi yapılmışsa altyazı hizmetleri ek
            açıklamalar ile sağlanır.
          </li>
        </ul>
        <ol start="4">
          <li>
            Önceki menüye dönmek için{" "}
            <img src={back} alt="geri" className="inline-icon" /> veya yayına
            dönmek için <img src={tv_icon} alt="tv" className="inline-icon" />{" "}
            düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}
