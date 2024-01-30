import React from "react";
import "../../style.css";
import tv_icon from "../../../../assets/images/icons/tv_icon.png";
import options from "../../../../assets/images/icons/options.png";
import back from "../../../../assets/images/icons/back.png";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from "@mui/material";

export default function GörüntüyüKapatma() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Güç Ayarları / Görüntüyü Kapatma</p>
      <Box className="container">
        <h1>Görüntüyü Kapatma</h1>
        <p classname="text">
          Televizyonu stand-by moduna almadan sadece görüntüyü kapatabilirsiniz.
        </p>
        <ol>
          <li>
            <img src={tv_icon} alt="TV" className="inline-icon"/> ardından <img src={options} alt="Seçenekler" className="inline-icon"/>
            düğmesine basın.
          </li>
          <li>
            <b>Güç</b>'ü seçip <Circle className="inline-icon button"/> düğmesine basın.
            <Box>
              <ArrowForwardIcon className="inline-icon xs"/> <b>Güç</b> menüsü görüntülenir.
            </Box>
          </li>
          <li>
            <b>Görüntüyü Kapat</b>'ı seçip <Circle className="inline-icon button"/> düğmesiyle onaylayın.
            <Box>
              <ArrowForwardIcon className="inline-icon xs"/> Ekran görüntüsü kapatılır.
            </Box>
          </li>
          <li>
            Görüntüyü tekrar açmak için kumandadan bir düğmeye basın.
          </li>
          <li>
            Yayına dönmek için <img src={back} alt="geri" className="inline-icon"/> veya
            {" "}<img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}

