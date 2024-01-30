import React from "react";
import "../../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import home from "../../../../assets/images/icons/home.png"
import settings from "../../../../assets/images/icons/settings.png"
import right from "../../../../assets/images/icons/right.png";
import left from "../../../../assets/images/icons/left.png";
import down from "../../../../assets/images/icons/down.png";
import back from "../../../../assets/images/icons/back.png";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";

export default function GörüntüAyarları() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ayarlar / Görüntü Ayarları</p>
      <Box className="container">
        <h1>Görüntü Ayarları</h1>
        <ol>
          <li>
          <img src={home} alt="home" className="inline-icon"/> düğmesine basın.
          </li>
          <li>
          <img src={settings} alt="ayarlar" className="inline-icon"/>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Cihaz Tercihleri</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Resim</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
            <Box><ArrowForwardIcon className="inline-icon xs"/> <b>Resim</b> menüsü görüntülenir.</Box>
            <h2>img gelcek</h2>
          </li>
          <li>
          <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> ile
          satırı/işlevi seçin <img src={left} alt="sol" className="inline-icon sm"/> veya <img src={right} alt="sağ" className="inline-icon sm"/> düğmesiyle
          değeri/seçeneği seçin.
          </li>
        </ol>
        <h2>Not:</h2>
        <ol>
          <li>
            <b>Gelişmiş Video</b>'yu seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
          <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> ile
          satırı/işlevi seçin <img src={left} alt="sol" className="inline-icon sm"/> veya <img src={right} alt="sağ" className="inline-icon sm"/> düğmesiyle
          değeri/seçeneği seçin.
          </li>
          <li>
            Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon"/> veya Home
            menüsüne dönmek için <img src={home} alt="home" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
        <h2>Ek bilgiler</h2>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/görüntü-ayarları/arttırılmış-görüntü-ayarları" className="link">
            Arttırılmış Görüntü Ayarları
          </Link>
        </Box>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/görüntü-ayarları/görüntü-ayarlarını-fabrika-ayarlarına-döndürme" className="link">
            Görüntü Ayarlarını Fabrika Ayarlarına Döndürme
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
