import React from "react";
import "../../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";

export default function GüçAyarları() {
  return (
    <div className="page">
      <p>Anasayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Güç Ayarları</p>
      <div className="container">
        <h1>Güç Ayarları</h1>
        <h2>Ek bilgiler</h2>
        <div className="link-container">
          <LinkIcon />
          <Link to="/temel-fonksiyonlar/güç-ayarları/uyku-zamanlayıcısı" className="link">
            Uyku Zamanlayıcısı
          </Link>      
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/temel-fonksiyonlar/güç-ayarları/görüntüyü-kapatma" className="link">
            Görüntüyü Kapatma
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/temel-fonksiyonlar/güç-ayarları/kapanma-zamanlayıcısı" className="link">
            Kapanma Zamanlayıcısı
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/temel-fonksiyonlar/güç-ayarları/sinyal-olmadığında-otomatik-kapanma" className="link">
            Sinyal Olmadığında Otomatik Kapanma
          </Link>
        </div>
      </div>
    </div>
  );
}
