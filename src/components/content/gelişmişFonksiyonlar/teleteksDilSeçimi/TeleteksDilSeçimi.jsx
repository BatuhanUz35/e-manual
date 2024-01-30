import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";

export default function TeleteksDilSeçimi() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Teleteks Dil Seçimi</p>
      <Box className="container">
        <h1>Teleteks Dil Seçimi</h1>
        <ol>
          <li>
            <b>Gelişmiş Seçenekler</b> menüsünden <b>Teleteks</b>'i seçip <Circle className="inline-icon button"/>
            {" "} düğmesine basın.
            <Box>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Teleteks</b> menüsü görüntülenir.
            </Box>
          </li>
        </ol>
        <h2>Ek bilgiler</h2>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/teleteks-dil-seçimi/dijital-teleteks-dili" className="link">
            Dijital Teleteks Dili
          </Link>
        </Box>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/teleteks-dil-seçimi/sayfa-deşifre-etme-dili" className="link">
            Sayfa Deşifre Etme Dili
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

