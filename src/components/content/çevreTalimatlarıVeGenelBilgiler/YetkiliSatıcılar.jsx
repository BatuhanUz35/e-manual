import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ul } from "./YetkiliSatıcılar_";

export default function YetkiliSatıcılar() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Çevre Talimatları ve Genel Bilgiler / Yetkili Satıcılar İçin
        Servis Bilgileri
      </p>
      <Box className="container">
        <h1>Yetkili Satıcılar İçin Servis Bilgileri</h1>
        <p>
          Bu ürün aşağıdaki Avrupa birliği direktifleri ve regülasyonlarına
          uygundur:
        </p>
        <ul>
        {ul.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
      </Box>
    </Box>
  );
}
