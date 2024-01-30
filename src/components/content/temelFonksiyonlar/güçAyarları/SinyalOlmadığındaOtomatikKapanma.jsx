import React from "react";
import "../../style.css";
import tv_icon from "../../../../assets/images/icons/tv_icon.png";
import options from "../../../../assets/images/icons/options.png";
import back from "../../../../assets/images/icons/back.png";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from "@mui/material";

export default function SinyalOlmadığındaOtomatikKapanma() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Güç Ayarları / Sinyal Olmadığında Otomatik Kapanma</p>
      <Box className="container">
        <h1>Sinyal Olmadığında Otomatik Kapanma</h1>
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
            <b>Sinyal Olmadığında Otomatik Kapanma</b>'yı seçip <Circle className="inline-icon button"/> düğmesiyle onaylayın.
          </li>
          <li>
            Kapanma zamanını seçip <Circle className="inline-icon button"/> düğmesine basın.
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

