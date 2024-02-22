import React from "react";
import "../../style.css";
import { ol, notlar } from "./CaModülüVeAkıllıKartlarİçinErişimKontrolü_";
import { Box } from "@mui/material";
import home from "../../../../assets/images/icons/home.png";
import back from "../../../../assets/images/icons/back.png";

export default function CaModülüVeAkıllıKartlarİçinErişimKontrolü() {
  return (
    <Box className="page">
      <p>Ana sayfa / Harici Cihaz Kullanma / CI (Ortak Arayüz) / CA Modülü ve Akıllı Kartlar için Erişim Kontrolü</p>
      <Box className="container">
        <h1>CA Modülü ve Akıllı Kartlar için Erişim Kontrolü</h1>
        <ol>
        {ol.map((li) => {
          return <li>{li}</li>;
        })}
        </ol>   
        <h2>Notlar:</h2>
        <ul>
        {notlar.map((li) => {
          return <li>{li}</li>;
        })}
        </ul>
        <ol start={ol.length+1}>
          <li>
          Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon"/> Home menüsüne dönmek 
          için <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}
