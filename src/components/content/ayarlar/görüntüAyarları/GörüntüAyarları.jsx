import React from "react";
import "../../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import home from "../../../../assets/images/png/home.png"
import settings from "../../../../assets/images/png/settings.png"
import right from "../../../../assets/images/png/right.png";
import left from "../../../../assets/images/png/left.png";
import down from "../../../../assets/images/png/down.png";
import back from "../../../../assets/images/png/back.png";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function GörüntüAyarları() {
  return (
    <div className="page">
      <p>Anasayfa / Ayarlar / Görüntü Ayarları</p>
      <div className="container">
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
            <div><ArrowForwardIcon className="inline-icon xs"/> <b>Resim</b> menüsü görüntülenir.</div>
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
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/görüntü-ayarları/arttırılmış-görüntü-ayarları" className="link">
            Arttırılmış Görüntü Ayarları
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/görüntü-ayarları/görüntü-ayarlarını-fabrika-ayarlarına-döndürme" className="link">
            Görüntü Ayarlarını Fabrika Ayarlarına Döndürme
          </Link>
        </div>
      </div>
    </div>
  );
}
