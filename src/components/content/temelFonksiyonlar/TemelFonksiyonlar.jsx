import React from "react";
import "../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";

export default function TemelFonksiyonlar() {
  return (
    <div className="page">
      <p>Anasayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar</p>
      <div className="container">
        <h1>Televizyonun Çalıştırılması Temel Fonksiyonlar</h1>
        <h2>Ek bilgiler</h2>
        <div className="link-container">
          <LinkIcon />
          <Link to="/temel-fonksiyonlar/açma-ve-kapatma" className="link">
            Açma ve Kapatma
          </Link>      
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/temel-fonksiyonlar/tv-modunu-seçme" className="link">
            TV Modunu Seçme
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/temel-fonksiyonlar/sinyal-kaynağı-ve-anten-tipini-seçme" className="link">
            Sinyal Kaynağı ve Anten Tipini Seçme
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/temel-fonksiyonlar/kanalları-seçme" className="link">
            Kanalları Seçme
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/temel-fonksiyonlar/ses-seviyesini-ayarlama" className="link">
            Ses Seviyesini Ayarlama
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/temel-fonksiyonlar/sesi-kapatma" className="link">
            Sesi Kapatma (Mute)
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/temel-fonksiyonlar/ses-stili" className="link">
            Ses Stili
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/temel-fonksiyonlar/resim-modu" className="link">
            Resim Modu
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/temel-fonksiyonlar/görüntü-formatını-değiştirme" className="link">
            Görüntü Formatını Değiştirme
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/temel-fonksiyonlar/güç-ayarları" className="link">
            Güç Ayarları
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/temel-fonksiyonlar/elektronik-tv-rehberi" className="link">
            Elektronik TV Rehberi
          </Link>
        </div>
      </div>
    </div>
  );
}
