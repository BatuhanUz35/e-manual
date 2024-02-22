import React from "react";
import "../../style.css";
import elektrik from "../../../../assets/images/safety/voltage_voltage_new.png";
import { Box } from "@mui/material";
import { ol, uyarı_texts } from "./ElektrikBağlantısı_";
import elektrik_bağlantısı from "../../../../assets/images/in-page-images/elektrik_bağlantısı.png"

export default function ElektrikBağlantısı() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Ürününüz / Anten ve Elektrik Kablosunu Bağlama / Elektrik
        Bağlantısı
      </p>
      <Box className="container">
        <h1>Elektrik Bağlantısı</h1>
        <img src={elektrik_bağlantısı} alt="Elektrik Bağlantısı" className="in-page-img" />
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <Box className="uyarı-başlık gray-bg">TEHLİKE</Box>
        <Box className="uyarı-container">
          <img src={elektrik} alt="electric" className="icon"></img>
          <Box>
          {uyarı_texts.map((text) => {
            return <p className="uyarı-içerik">{text}</p>;
          })}
          </Box>
        </Box>
        <hr className="uyarı-bitiş gray-bg"/>
      </Box>
    </Box>
  );
}
