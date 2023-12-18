import React from "react";
import "../../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import tuş_takımı from "../../../../assets/images/png/tuş_takımı.png";

export default function TuşTakımı() {
  return (
    <div className="page">
      <p>Anasayfa / Ürününüz / Tuş Takımı</p>
      <div className="container">
        <h1>Tuş Takımı </h1>
        <img src={tuş_takımı} alt="tuş takımı" className="in-page-img"></img>
        <h2>Ek bilgiler</h2>
        <div className="link-container">
          <LinkIcon /> <Link to="/ürün/tuş-takımı/bekleme-konumu-açılma" className="link">Cihazın Bekleme Konumundan Açılması</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/ürün/tuş-takımı/bekleme-konumuna-alma" className="link">Cihazın Bekleme Konumuna Alınması</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/ürün/tuş-takımı/uyku-konumu" className="link">Cihazın Uyku Konumuna Alınması ve Açılması</Link>
        </div>
      </div>
    </div>
  );
}
