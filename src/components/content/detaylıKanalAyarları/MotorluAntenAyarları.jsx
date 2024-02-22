import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol, ol_2, ol_3 } from "./MotorluAntenAyarları_";
import info from "../../../assets/images/icons/info.png";

export default function MotorluAntenAyarları() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Detaylı Kanal Ayarları / Motorlu Anten Ayarları
      </p>
      <Box className="container">
        <h1>
          Motorlu Anten Ayarları
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
        <p>Televizyonunuz DiSEqC 1.2 motorlu uydu sistemlerini desteklemektedir. Bu özellik ile uyduyu televizyonunuz üzerinden kontrol edebilirsiniz.</p>
        <p>Her uyduya göre uydu anten pozisyonunu ayarlayın. Bu ayarlar saklanarak ihtiyaç duyulduğunda anten önceden kaydedilmiş bir konuma taşınabilir.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>Hareket Kontrolü <b>USALS</b> seçildiğinde <b>Doğu Yönünde Hareket Ettir</b>, <b>Batı Yönünde Hareket Ettir</b> ve <b>Hareketi Durdur</b> seçenekleri menüde görüntülenmez.</li>
        </ul>
        <ol start={ol.length+1}>
          {ol_2.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
          Arama yapmak istediğiniz her bir uydu için <b>17</b> ila <b>26.</b> adımlarda anlatılan ayarları yapın.
          </li>
        </ul>
        <ol start={ol.length+ol_2.length+1}>
          {ol_3.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
