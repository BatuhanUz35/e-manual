import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import tv_icon from "../../../../assets/images/icons/tv_icon.png";
import back from "../../../../assets/images/icons/back.png";
import down from "../../../../assets/images/icons/down.png";
import { Box } from "@mui/material";

export default function SayfaDeşifreEtmeDili() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Teleteks Dil Seçimi / Sayfa Deşifre Etme Dili</p>
      <Box className="container">
        <h1>Sayfa Deşifre Etme Dili</h1>
        <ol>
          <li>
            <b>Teleteks</b> menüsünden <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            <b> Sayfayı Deşifre Etme Dili</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
          <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle sayfayı deşifre etme dilini
          seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon"/> veya
            yayına dönmek için <img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}

