import React from "react";
import "../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function GüvenlikTalımatları() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Güvenlik Talimatları</p>
      <Box className="container">
        <h1>Güvenlik Talimatları</h1>
        <p classname="text">
          Bu bölümde, kişisel yaralanma ya da maddi hasar tehlikelerini önlemeye
          yardımcı olacak güvenlik talimatları yer almaktadır.
        </p>
        <p classname="text">
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
        <Box className="link-container">
          <LinkIcon /> <Link to="/güvenlik-talimatları/kullanım-amacı" className="link">Kullanım Amacı</Link>
        </Box>
        <Box className="link-container">
          <LinkIcon /> <Link to="/güvenlik-talimatları/elektrik-güvenliği" className="link">Elektrik Güvenliği</Link>
        </Box>
        <Box className="link-container">
          <LinkIcon /> <Link to="/güvenlik-talimatları/yangın-güvenliği" className="link">Yangın Güvenliği</Link>
        </Box>
        <Box className="link-container">
          <LinkIcon /> <Link to="/güvenlik-talimatları/taşıma-güvenliği" className="link">Taşıma Güvenliği</Link>
        </Box>
        <Box className="link-container">
          <LinkIcon /> <Link to="/güvenlik-talimatları/kurulum-güvenliği" className="link">Kurulum Güvenliği</Link>
        </Box>
        <Box className="link-container">
          <LinkIcon /> <Link to="/güvenlik-talimatları/çocuk-savunmasız-kişi-ve-evcil-hayvan-güvenliği" className="link">Çocuk, Savunmasız Kişi ve Evcil Hayvan Güvenliği</Link>
        </Box>
        <Box className="link-container">
          <LinkIcon /> <Link to="/güvenlik-talimatları/bakım-ve-temizlik-güvenliği" className="link">Bakım ve Temizlik Güvenliği</Link>
        </Box>
      </Box>
    </Box>
  );
}
