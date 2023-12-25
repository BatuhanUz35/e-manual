import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function TeleteksDilSeçimi() {
  return (
    <div className="page">
      <p>Anasayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Teleteks Dil Seçimi</p>
      <div className="container">
        <h1>Teleteks Dil Seçimi</h1>
        <ol>
          <li>
            <b>Gelişmiş Seçenekler</b> menüsünden <b>Teleteks</b>'i seçip <Circle className="inline-icon button"/>
            {" "} düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Teleteks</b> menüsü görüntülenir.
            </div>
          </li>
        </ol>
        <h2>Ek bilgiler</h2>
        <div className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/teleteks-dil-seçimi/dijital-teleteks-dili" className="link">
            Dijital Teleteks Dili
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/teleteks-dil-seçimi/sayfa-deşifre-etme-dili" className="link">
            Sayfa Deşifre Etme Dili
          </Link>
        </div>
      </div>
    </div>
  );
}

