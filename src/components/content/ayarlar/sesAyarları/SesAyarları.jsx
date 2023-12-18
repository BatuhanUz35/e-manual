import React from "react";
import "../../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import home from "../../../../assets/images/png/home.png"
import settings from "../../../../assets/images/png/settings.png"
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function SesAyarları() {
  return (
    <div className="page">
      <p>Anasayfa / Ayarlar / Ses Ayarları</p>
      <div className="container">
        <h1>Ses Ayarları</h1>
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
            <b>Ses</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
            <div><ArrowForwardIcon className="inline-icon xs"/> <b>Ses</b> menüsü görüntülenir.</div>
            <h2>img gelcek</h2>
          </li>
        </ol>
        <h2>Ek bilgiler</h2>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/ses-ayarları/sistem-sesleri" className="link">
            Sistem Sesleri
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/ses-ayarları/balans" className="link">
            Balans
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/ses-ayarları/bas" className="link">
            Bas
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/ses-ayarları/tiz" className="link">
            Tiz
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/ses-ayarları/surround-ses" className="link">
            Surround Ses
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/ses-ayarları/ekolayzer" className="link">
            Ekolayzer
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/ses-ayarları/hoparlör-gecikmesi" className="link">
            Hoparlör Gecikmesi
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/ses-ayarları/earc" className="link">
            eARC
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/ses-ayarları/dijital-giriş" className="link">
            Dijital Giriş
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/ses-ayarları/dijital-çıkış" className="link">
            Dijital Çıkış
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/ses-ayarları/spdif-gecikmesi" className="link">
            SPDIF Gecikmesi
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/ses-ayarları/dijital-çıkış-gecikmesi" className="link">
            Dijital Çıkış Gecikmesi
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/ses-ayarları/otomatik-ses" className="link">
            Otomatik Ses
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/ses-ayarları/downmix-modu" className="link">
            Downmix Modu
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/ses-ayarları/dts-drc" className="link">
            DTS DRC
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/ses-ayarları/ses-ayarlarını-fabrika-ayarlarına-döndürme" className="link">
            Ses Ayarlarını Fabrika Ayarlarına Döndürme
          </Link>
        </div>
      </div>
    </div>
  );
}
