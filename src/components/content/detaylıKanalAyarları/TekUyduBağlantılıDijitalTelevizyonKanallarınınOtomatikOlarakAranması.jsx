import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./TekUyduBağlantılıDijitalTelevizyonKanallarınınOtomatikOlarakAranması_";
import info from "../../../assets/images/icons/info.png";
import back from "../../../assets/images/icons/back.png";
import home from "../../../assets/images/icons/home.png";
import tv_icon from "../../../assets/images/icons/tv_icon.png";

export default function TekUyduBağlantılıDijitalTelevizyonKanallarınınOtomatikOlarakAranması() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Detaylı Kanal Ayarları / Tek Uydu Bağlantılı Dijital
        Televizyon Kanallarının Otomatik Olarak Aranması
      </p>
      <Box className="container">
        <h1>
          Tek Uydu Bağlantılı Dijital Televizyon Kanallarının Otomatik Olarak
          Aranması
        </h1>
        <p>
          Yeni uydu kanalları sık sık eklenir ya da uydu verileri değiştirilir.
          Bu nedenle, otomatik arama fonksiyon zaman zaman başlatmanız önerilir.
        </p>
        <Box className="uyarı-başlık blue-bg">DUYURU</Box>
        <Box className="uyarı-container">
          <img src={info} alt="Info" className="icon"></img>
          <Box>
            <p className="uyarı-içerik">
              Uydu anteninizden televizyona direkt bir kablo bağlantı varsa
              arada bir ortak uydu anteni santrali yoksa Tek kablo araması
              yapmanız gerekmektedir.
            </p>
          </Box>
        </Box>
        <hr className="uyarı-bitiş blue-bg" />
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not: </h2>
        <ul>
          <li>
            Yayıncı kaynaklı uydu parametreleri değişiklikleri neticesinde bazı frekanslar eksik 
            kaydedilirse, <b>Tarama Modu</b>‘nun <b>Ağ</b> seçilmesi önerilir.
          </li>
        </ul>
        <ol start={ol.length + 1}>
          <li>
            Önceki menüye dönmek için{" "}
            <img src={back} alt="Geri" className="inline-icon" />, TV yayınına
            dönmek için <img src={tv_icon} alt="TV" className="inline-icon" />{" "}
            veya Home menüsüne dönmek için{" "}
            <img src={home} alt="Home" className="inline-icon" /> düğmesine
            basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}
