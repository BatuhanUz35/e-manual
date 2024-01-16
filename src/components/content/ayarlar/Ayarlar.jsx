import React from "react";
import "../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";

export default function Ayarlar() {
  return (
    <div className="page">
      <p>Anasayfa / Ayarlar</p>
      <div className="container">
        <h1>Ayarlar</h1>
        <h2>Ek bilgiler</h2>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/hazırlık" className="link">
            Hazırlık
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/kurulum" className="link">
            İlk Kurulum ve Televizyonu Ayarlama
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/dijital-kanalları-düzenleme" className="link">
            Dijital Kanalları Düzenleme
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/görüntü-ayarları" className="link">
            Görüntü Ayarları
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/ses-ayarları" className="link">
            Ses Ayarları
          </Link>
        </div>
      </div>
    </div>
  );
}
