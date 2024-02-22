import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol, ol_2, notlar } from "./DijitalUyduKanallarıİçinAntenAyarlarıVeTekKanalYönlendiriciSistemiİleKanallarınOtomatikAranması_";
import info from "../../../assets/images/icons/info.png";
import back from "../../../assets/images/icons/back.png"
import tv_icon from "../../../assets/images/icons/tv_icon.png"
import home from "../../../assets/images/icons/home.png"
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function DijitalUyduKanallarıİçinAntenAyarlarıVeTekKanalYönlendiriciSistemiİleKanallarınOtomatikAranması() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Detaylı Kanal Ayarları / Dijital Uydu Kanalları için Anten Ayarları ve Tek Kanal Yönlendirici (SCR) Sistemi ile Kanalların Otomatik Aranması
      </p>
      <Box className="container">
        <h1>
        Dijital Uydu Kanalları için Anten Ayarları ve Tek Kanal Yönlendirici (SCR) Sistemi ile Kanalların Otomatik Aranması
        </h1>
        <Box className="uyarı-başlık blue-bg">DUYURU</Box>
        <Box className="uyarı-container">
          <img src={info} alt="Info" className="icon"></img>
          <Box>
            <p className="uyarı-içerik">
              Televizyon SCR sistemini desteklemektedir. (Single Channel Router – Tek Kanal Yönlendirici - EN 50494).
            </p>
            <p className="uyarı-içerik">
            Aşağıdaki bölümde anlatılan LNB ayarları uydu sistemleri hakkında önemli bir uzmanlık gerektirmektedir. Konu ile ilgili bir uzman ile görüşün.
            </p>
          </Box>
        </Box>
        <hr className="uyarı-bitiş blue-bg" />
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            Örnek kurulum <b>Single Cable I</b> ile sekiz cihaz için açıklanmıştır..
          </li>
        </ul>
        <ol start={ol.length+1}>
          {ol_2.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
       <h2>Not:</h2>
       <ul>
        <li>
        Arama yapmak istediğiniz her bir uydu için <b>14</b> ila <b>24.</b> adımlarda anlatılan ayarları yapın.
        </li>
       </ul>
       <ol start={ol.length+ol_2.length+1}>
        <li>
          <b>Sonraki</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
          <Box className="flex-container padding-1">
            <ArrowForwardIcon className="inline-icon xs" /><Box><b>Otomatik Arama</b> menüsü görüntülenir ve TV kanallarının aranmasına başlanır.</Box>
          </Box>
          <Box className="flex-container padding-1">
            <ArrowForwardIcon className="inline-icon xs" /><Box>Arama işlemi, alınan televizyon kanallarının sayısına bağlı olarak birkaç dakika sürebilir.</Box>
          </Box>
        </li>
       </ol>
       <h2>Notlar:</h2>
       <ul>
       {notlar.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
       <ol start={ol.length+ol_2.length+2}>
        <li>
          Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" />, TV yayınına dönmek
          için <img src={tv_icon} alt="TV" className="inline-icon" /> veya Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
        </li>
       </ol>
      </Box>
    </Box>
  );
}
