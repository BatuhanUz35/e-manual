import React from "react";
import "../../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";

export default function TuşTakımı() {
  return (
    <div className="page">
      <p>Anasayfa / Ürününüz / Anten ve Elektrik Kablosunu Bağlama</p>
      <div className="container">
        <h1>Anten ve Elektrik Kablosunu Bağlama</h1>
        <h2>Ek bilgiler</h2>
        <div className="link-container">
          <LinkIcon /> <Link to="/ürün/anten-ve-elektrik-kablosu/dvbs-anten-bağlantısı" className="link">DVB-S Uydu Anten Bağlantısı</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/ürün/anten-ve-elektrik-kablosu/dvbt-dvbc-ve-analog-anten-bağlantısı" className="link">DVB-T, DVB-C ve Analog Anten Bağlantısı</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/ürün/anten-ve-elektrik-kablosu/elektrik-bağlantısı" className="link">Elektrik Bağlantısı</Link>
        </div>
      </div>
    </div>
  );
}
