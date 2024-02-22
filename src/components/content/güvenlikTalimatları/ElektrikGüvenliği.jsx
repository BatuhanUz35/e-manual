import React from "react";
import "../style.css";
import electric from "../../../assets/images/safety/voltage_voltage_new.png";
import { Box } from "@mui/material";
import { ul } from "./ElektrikGüvenliği_";

export default function ElektrikGüvenliği() {
  return (
    <Box className="page">
      <p>Ana sayfa / Güvenlik Talimatları / Elektrik Güvenliği</p>
      <Box className="container">
        <h1>Elektrik Güvenliği</h1>
        <Box className="uyarı-başlık red-bg">UYARI</Box>
        <Box className="uyarı-container">
          <img src={electric} alt="electric" className="icon"></img>
          <Box>
            <p className="uyarı-içerik">
              ÖNEMLİ GÜVENLİK TALİMATLARI. TALİMATLARI İLERİDE BAŞVURMAK ÜZERE
              SAKLAYIN
            </p>
            <p className="uyarı-içerik">
              Hemen ardından: Bu cihaz ile birlikte verilen tüm güvenlik
              uyarılarını, talimatları, çizimler ve teknik özellikleri dikkate
              alın.
            </p>
          </Box>
        </Box>
        <hr className="uyarı-bitiş red-bg"/>
      </Box>
      <ul>
      {ul.map((li) => {
          return (
              <li>{li}</li>
          );
      })}
      </ul>
    </Box>
  );
}
