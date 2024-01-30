import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import tv_icon from "../../../../assets/images/icons/tv_icon.png";
import back from "../../../../assets/images/icons/back.png";
import down from "../../../../assets/images/icons/down.png";
import { Box } from "@mui/material";

export default function TercihEdilenListe() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / TKGS Ayarları / Tercih Edilen Liste</p>
      <Box className="container">
        <h1>Tercih Edilen Liste</h1>
        <ol>
          <li>
            <b>TKGS Ayarı</b> menüsünden <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            <b>Tercih Edilen Liste</b>'yi seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            <b> HD</b> veya <b>SD</b> seçimini yapıp <Circle className="inline-icon button"/> düğmesine basın.
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

