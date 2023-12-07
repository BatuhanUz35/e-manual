import React from "react";
import "../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";

export default function GüvenlikTalımatları() {
  return (
    <div className="page">
      <p>Anasayfa / Güvenlik Talimatları</p>
      <div className="container">
        <h1>Güvenlik Talimatları</h1>
        <p>
          Bu bölümde, kişisel yaralanma ya da maddi hasar tehlikelerini önlemeye
          yardımcı olacak güvenlik talimatları yer almaktadır.
        </p>
        <p>
          Firmamız bu talimatları uyulmaması halinde ortaya çıkabilecek
          zararlardan sorumlu tutulamaz.
        </p>
        <ul>
          <li>
            Kurulum ve tamir işlemlerini her zaman yetkili servise yaptırın.
          </li>
          <li>Sadece orijinal yedek parça ve aksesuar kullanın.</li>
          <li>
            Kullanım kılavuzunda açıkça belirtilmediği sürece, ürünün hiçbir
            parçasını onarmayın veya değiştirmeyin.
          </li>
          <li>Üründe teknik değişiklikler yapmayın.</li>
        </ul>
        <h2>Ek bilgiler</h2>
        <div className="link-container">
          <LinkIcon /> <Link to="/güvenlik-talimatları/kullanım-amacı" className="link">Kullanım Amacı</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/güvenlik-talimatları/elektrik-güvenliği" className="link">Elektrik Güvenliği</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/güvenlik-talimatları/yangın-güvenliği" className="link">Yangın Güvenliği</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/güvenlik-talimatları/taşıma-güvenliği" className="link">Taşıma Güvenliği</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/güvenlik-talimatları/kurulum-güvenliği" className="link">Kurulum Güvenliği</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/güvenlik-talimatları/çocuk-savunmasız-kişi-ve-evcil-hayvan-güvenliği" className="link"><div>Çocuk, Savunmasız Kişi ve Evcil Hayvan Güvenliği</div></Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/güvenlik-talimatları/bakım-ve-temizlik-güvenliği" className="link"><div>Bakım ve Temizlik Güvenliği</div></Link>
        </div>
      </div>
    </div>
  );
}
