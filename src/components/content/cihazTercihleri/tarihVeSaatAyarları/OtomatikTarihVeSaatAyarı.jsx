import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./OtomatikTarihVeSaatAyarı_";
import home from "../../../../assets/images/icons/home.png";
import back from "../../../../assets/images/icons/back.png";

export default function OtomatikTarihVeSaatAyarı() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Cihaz Tercihleri / Tarih ve Saat Ayarları / Otomatik Tarih ve Saat Ayarı
      </p>
      <Box className="container">
        <h1>Otomatik Tarih ve Saat Ayarı</h1>
        <p>Ağ tarafından sağlanan tarih ve saat bilgisidir.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            Ağ tarafından sağlanan saat kullanıldığında <b>Tarih ve Saat</b>{" "}
            menüsündeki <b>Tarihi ayarla</b> ve <b>Saati ayarla</b> seçenekleri
            aktif değildir.
          </li>
        </ul>
        <ol start={ol.length+1}>
          <li>
            <Box>
              Önceki menüye dönmek için{" "}
              <img src={back} alt="Geri" className="inline-icon" /> Home
              menüsüne dönmek için{" "}
              <img src={home} alt="Home" className="inline-icon" /> düğmesine
              basın.
            </Box>
          </li>
        </ol>
      </Box>
    </Box>
  );
}
