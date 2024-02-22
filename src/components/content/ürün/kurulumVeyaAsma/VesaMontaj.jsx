import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ul, ol } from "./VesaMontaj_";
import vesa from "../../../../assets/images/in-page-images/vesa.png"

export default function VesaMontaj() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Ürününüz / Kurulum veya Asma / VESA Montaj Kiti ile Montaj
        Hazırlığı
      </p>
      <Box className="container">
        <h1>VESA Montaj Kiti ile Montaj Hazırlığı</h1>
        <p>
          Montaj kiti satın alma bilgisi için yetkili bayii ile görüşün.
        </p>
        <p>Şunlara ihtiyacınız olacaktır:</p>
        <ul>
          {ul.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
        <img src={vesa} alt="VESA" className="in-page-img" />
        <p>
          VESA montaj kiti için montaj talimatlarını izleyin
        </p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
