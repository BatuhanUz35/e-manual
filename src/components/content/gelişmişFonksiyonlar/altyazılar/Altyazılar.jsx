import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import sub from "../../../../assets/images/png/sub.png"

export default function Altyazılar() {
  return (
    <div className="page">
      <p>Anasayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Altyazılar</p>
      <div className="container">
        <h1>Altyazılar</h1>
        <ol>
          <li>
            <b>Gelişmiş Seçenekler</b> menüsünden <b>Altyazı</b>'yı seçip <Circle className="inline-icon button"/>
            {" "} düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Altyazı</b> menüsü görüntülenir.
            </div>
          </li>
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            TV modunda kumanda üzerinde bulunan <img src={sub} alt="Sub" className="inline-icon"/> düğmesine
            basarak <b>Altyazı</b> menüsünü açabilirsiniz.
          </li>
        </ul>
        <h2>Ek bilgiler</h2>
        <div className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/altyazılar/analog-altyazı" className="link">
            Analog Altyazı
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/altyazılar/dijital-altyazı" className="link">
            Dijital Altyazı
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/altyazılar/dijital-altyazı-dili" className="link">
            Dijital Altyazı Dili
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/altyazılar/ikinci-dijital-altyazı-dili" className="link">
            İkinci Dijital Altyazı Dili
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/altyazılar/altyazı-türü" className="link">
            Altyazı Türü
          </Link>
        </div>
      </div>
    </div>
  );
}

