import React from "react";
import "../style.css";
import { Circle } from "@mui/icons-material";
import tv_icon from "../../../assets/images/icons/tv_icon.png";
import back from "../../../assets/images/icons/back.png";
import down from "../../../assets/images/icons/down.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";
import { notlar } from "./SinyalBilgileri_"

export default function SinyalBilgileri() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Sinyal Bilgileri</p>
      <Box className="container">
        <h1>Sinyal Bilgileri</h1>
        <ol>
          <li>
            <b>Gelişmiş Seçenekler</b> menüsünden <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/
            <img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle <b>Sistem Bilgileri</b>'ni seçip
            {" "}<Circle className="inline-icon button"/> düğmesine basın.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs" /><Box>Bir süre sonra ekranda <b>Hoş geldiniz</b> menüsü görüntülenir</Box>
            </Box>
          </li>
        </ol>
        <h2>Notlar:</h2>
        <ul>
        {notlar.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
        <ol start="2">
          <li>
            Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon"/> veya
            yayına dönmek için <img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}

