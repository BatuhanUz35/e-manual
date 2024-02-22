import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./VarsayılanKanal_"
import tv_icon from "../../../assets/images/icons/tv_icon.png";
import back from "../../../assets/images/icons/back.png";

export default function VarsayılanKanal() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Varsayılan
        Kanal
      </p>
      <Box className="container">
        <h1>Varsayılan Kanal</h1>
        <p>TV'nin açılacağı varsayılan kanalı seçin.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            <b>Kullanıcının Seçimi</b> seçildiğinde <b>Kanlları Göster</b>'den
            varsayılan kanal seçimi yapılması gerekmektedir.
          </li>
        </ul>
        <ol start={ol.length + 1}>
          <li>
            <Box>
              Yayına dönmek için{" "}
              <img src={back} alt="Geri" className="inline-icon" /> veya{" "}
              <img src={tv_icon} alt="TV" className="inline-icon" /> düğmesine
              basın.
            </Box>
          </li>
        </ol>
      </Box>
    </Box>
  );
}

