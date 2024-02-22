import React from "react";
import "../style.css";
import fire from "../../../assets/images/safety/TV_icons_Fire_danger.png";
import { Box } from "@mui/material";
import { ul } from "./YangınGüvenliği_";

export default function YangınGüvenliği() {
  return (
    <Box className="page">
      <p>Ana sayfa / Güvenlik Talimatları / Yangın Güvenliği</p>
      <Box className="container">
        <h1>Yangın Güvenliği</h1>
        <Box className="uyarı-başlık red-bg">DİKKAT</Box>
        <Box className="uyarı-container">
          <img src={fire} alt="electric" className="icon"></img>
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
        <ul>
        {ul.map((li) => {
          return (
              <li>{li}</li>
          );
      })}
        </ul>
      </Box>
    </Box>
  );
}
