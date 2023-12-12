import React from "react";
import "../../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";

export default function KurulumVeyaAsma() {
  return (
    <div className="page">
      <p>Anasayfa / Ürününüz / Kurulum veya Asma</p>
      <div className="container">
       <h1>Kurulum veya Asma</h1>
       <p>Ekrana direkt güneş ışığının yansımayacağı bir yer seçin.</p>
        <h2>Ek bilgiler</h2>
        <div className="link-container">
          <LinkIcon /> <Link to="/ürün/kurulum-veya-asma/ayaklı-kurulum" className="link">Ayaklı Kurulum</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/ürün/kurulum-veya-asma/vesa-montaj" className="link">VESA Montaj Kiti ile Montaj Hazırlığı</Link>
        </div>
      </div>
    </div>
  );
}
