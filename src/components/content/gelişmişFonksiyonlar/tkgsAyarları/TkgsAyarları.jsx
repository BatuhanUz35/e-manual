import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import down from "../../../../assets/images/icons/down.png";
import { Box } from "@mui/material";

export default function TkgsAyarları() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / TKGS Ayarları</p>
      <Box className="container">
        <h1>TKGS Ayarları</h1>
        <h2>Not:</h2>
        <ul>
          <li>
            TKGS Ayarları öğesi sadece Kanal Kurulumu <b>Uydu (Operatör Modu)</b> olarak yapıldığında menüde görüntülenir.
          </li>
        </ul>
        <ol>
          <li>
            <b>Gelişmiş Seçenekler</b> menüsünden <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            <b> TKGS</b>'yi seçip <Circle className="inline-icon button"/>
            {" "} düğmesine basın.
            <Box>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>TKGS Ayarı</b> menüsü görüntülenir.
            </Box>
          </li>
        </ol>
        <h2>Ek bilgiler</h2>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/tkgs-ayarları/çalışma-şekli" className="link">
            Çalışma Şekli
          </Link>
        </Box>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/tkgs-ayarları/tkgs-konum-listesi" className="link">
            TKGS Konum Listesi
          </Link>
        </Box>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/tkgs-ayarları/tablo-versiyonu-sıfırlama" className="link">
            Tablo Versiyonu Sıfırlama
          </Link>
        </Box>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/tkgs-ayarları/tercih-edilen-liste" className="link">
            Tercih Edilen Liste
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

