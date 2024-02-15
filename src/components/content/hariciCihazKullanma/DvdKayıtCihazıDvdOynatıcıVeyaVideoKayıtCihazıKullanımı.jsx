import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./DvdKayıtCihazıDvdOynatıcıVeyaVideoKayıtCihazıKullanımı_";

export default function DvdKayıtCihazıDvdOynatıcıVeyaVideoKayıtCihazıKullanımı() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Harici Cihaz Kullanma / DVD Kayıt Cihazı, DVD Oynatıcı, veya Video Kayıt Cihazı Kullanımı
      </p>
      <Box className="container">
        <h1>DVD Kayıt Cihazı, DVD Oynatıcı, veya Video Kayıt Cihazı Kullanımı</h1>
        <ol>
        {ol.map((li) => {
          return <li>{li}</li>;
        })}
        </ol>
      
      </Box>
    </Box>
  );
}
