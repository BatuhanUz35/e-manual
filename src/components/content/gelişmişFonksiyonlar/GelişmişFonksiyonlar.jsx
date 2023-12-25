import React from "react";
import "../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import tv_icon from "../../../assets/images/png/tv_icon.png";
import options from "../../../assets/images/png/options.png";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function GelişmişFonksiyonlar() {
  return (
    <div className="page">
      <p>Anasayfa / Televizyonun Çalıştırılması Gelişmiş Fonksiyonlar</p>
      <div className="container">
        <h1>Televizyonun Çalıştırılması Gelişmiş Fonksiyonlar</h1>
        <p>
          Gelişmiş Seçenekler menüsünden TV'nin gelişmiş ayarlarını yapabilirsiniz.
        </p>
        <ol>
          <li>
            <img src={tv_icon} alt="TV" className="inline-icon"/> ardından <img src={options} alt="Seçenekler" className="inline-icon"/>
            düğmesine basın.
          </li>
          <li>
            <b>Gelişmiş Seçenekler</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/> <b>Gelişmiş Seçenekler</b> menüsü görüntülenir.
              <h2>img gelcek</h2>
            </div>
          </li>
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            İlave işlemler aşğıdaki bölümlerde açıklanmıştır.
          </li>
        </ul>
        <h2>Ek bilgiler</h2>
        <div className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/ses-dilinin-değiştirilmesi" className="link">
            Ses Dilinin Değiştirilmesi
          </Link>      
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/ses-dili" className="link">
            Ses Dili
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/mavi-ekran" className="link">
            Mavi Ekran
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/varsayılan-kanal" className="link">
            Varsayılan Kanal
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/etkileşim-kanalı" className="link">
            Etkileşim Kanalı
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/mheg-pin-koruması" className="link">
            MHEG PIN Koruması
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/altyazılar" className="link">
            Altyazılar
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/teleteks-dil-seçimi" className="link">
            Teleteks Dil Seçimi
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/biss-anahtarı" className="link">
            BISS Anahtarı
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/tkgs-anahtarı" className="link">
            TKGS Anahtarı
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/sinyal-bilgileri" className="link">
            Sinyal Bilgileri
          </Link>
        </div>
      </div>
    </div>
  );
}
