import React from "react";
import "../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";

export default function Ürün() {
  return (
    <div className="page">
      <p>Anasayfa / Ürününüz</p>
      <div className="container">
       <h1>Ürününüz</h1>
        <h2>Ek bilgiler</h2>
        <div className="link-container">
          <LinkIcon /> <Link to="/ürün/paketin-içindekiler" className="link">Paketin İçindekiler</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/ürün/kurulum-veya-asma" className="link">Kurulum veya Asma</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/ürün/uzaktan-kumanda-pil" className="link">Uzaktan Kumandaya Pillerin Takılması</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/ürün/ürün-tanıtım" className="link">Ürün Tanıtımı</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/ürün/tuş-takımı" className="link">Ürün Tanıtımı</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/ürün/anten-ve-elektrik-kablosu" className="link">Anten ve Elektrik Kablosunu Bağlama</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/ürün/uzaktan-kumanda" className="link">Uzaktan Kumanda</Link>
        </div>
      </div>
    </div>
  );
}
