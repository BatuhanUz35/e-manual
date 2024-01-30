import React from "react";
import "../style.css";
import { ol1, ol2 } from "./TopTekstVeyaFlofTekstModu_";
import info from "../../../assets/images/icons/info.png";
import { Box } from "@mui/material";

export default function TopTekstVeyaFlofTekstModu() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Teleteks / TOP Tekst veya FLOF Tekst Modu</p>
      <Box className="container">
        <h1>TOP Tekst veya FLOF Tekst Modu</h1>
        <ol>
          {ol1.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <Box className="uyarı-başlık blue-bg">DUYURU</Box>
        <Box className="uyarı-container">
          <img src={info} alt="İnfo" className="icon"></img>
          <Box>
            <p className="uyarı-içerik">
              Ekranın alt kısmında, kırmızı, yeşil ve ayrıca kanala bağlı olarak
              sarı ve mavi metin alanlarından oluşan bir bilgi satırı
              görüntülenir. Uzaktan kumandanızda bunlara karşılık gelen düğmeler
              bulunmaktadır.
            </p>
          </Box>
        </Box>
        <hr className="uyarı-bitiş blue-bg" />
        <ol start="3">
        {ol2.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
