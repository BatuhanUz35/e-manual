import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./TekUyduBağlantılıDijitalTelevizyonKanallarınınManuelOlarakAranması_";
import info from "../../../assets/images/icons/info.png";

export default function TekUyduBağlantılıDijitalTelevizyonKanallarınınManuelOlarakAranması() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Detaylı Kanal Ayarları / Tek Uydu Bağlantılı Dijital
        Televizyon Kanallarının Manuel Olarak Aranması
      </p>
      <Box className="container">
        <h1>
          Tek Uydu Bağlantılı Dijital Televizyon Kanallarının Manuel Olarak
          Aranması
        </h1>
        <p>
          Otomatik arama ile belirli bir istasyon bulunamazsa manuel arama ile istasyon araması yapın. Bunun için istasyonun tüm parametreleri doğru girilmelidir. 
          Geçerli transponder bilgilerini Teleteks sayfasından, uydu TV dergi yayınları veya internetten öğrenebilirsiniz.
        </p>
        <Box className="uyarı-başlık blue-bg">DUYURU</Box>
        <Box className="uyarı-container">
          <img src={info} alt="Info" className="icon"></img>
          <Box>
            <p className="uyarı-içerik">
              Uydu anteninizden televizyona direkt bir kablo bağlantı varsa arada bir ortak uydu anteni santrali yoksa Tek kablo araması yapmanız gerekmektedir.
            </p>
          </Box>
        </Box>
        <hr className="uyarı-bitiş blue-bg" />
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
