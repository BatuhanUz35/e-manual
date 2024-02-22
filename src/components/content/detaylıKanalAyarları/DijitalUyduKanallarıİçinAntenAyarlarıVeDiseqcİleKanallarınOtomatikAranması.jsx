import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol, ol_2, ol_3 } from "./DijitalUyduKanallarıİçinAntenAyarlarıVeDiseqcİleKanallarınOtomatikAranması_";
import info from "../../../assets/images/icons/info.png";
import back from "../../../assets/images/icons/back.png"

export default function DijitalUyduKanallarıİçinAntenAyarlarıVeDiseqcİleKanallarınOtomatikAranması() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Detaylı Kanal Ayarları / Dijital Uydu Kanalları için Anten Ayarları ve DiSEqC 1.0/1.1 ile Kanalların Otomatik Aranması
      </p>
      <Box className="container">
        <h1>
          Dijital Uydu Kanalları için Anten Ayarları ve DiSEqC 1.0/1.1 ile Kanalların Otomatik Aranması
        </h1>
        <Box className="uyarı-başlık blue-bg">DUYURU</Box>
        <Box className="uyarı-container">
          <img src={info} alt="Info" className="icon"></img>
          <Box>
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
            Örnek kurulum <b>DiSEqC 1.0</b> üzerinden 4 uydu ile açıklanmıştır.
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
            <b>Anten Tipi</b>, <b>DiSEqC 1.1</b> seçilmiş ise; <b>Uncommit 1</b> ile <b>Uncommit 16</b> arasında seçiminizi yapın.
          </li>
        </ul>
        <ol start={ol_2.length+ol.length+1}>
          <li>
            <b>Otomatik Kanal Arama</b> menüsüne dönmek için <img src={back} alt="Geri" className="inline-icon" /> düğmesine iki kez basın.
          </li>
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
          Arama yapmak istediğiniz diğer üç uydu için <b>11</b> ila <b>19.</b> adımlarda anlatılan ayarları yapın.
          </li>
        </ul>
        <ol start={ol.length+ol_2.length+2}>
          {ol_3.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
