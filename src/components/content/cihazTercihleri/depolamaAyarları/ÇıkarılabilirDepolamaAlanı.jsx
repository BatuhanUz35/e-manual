import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./ÇıkarılabilirDepolamaAlanı_";

export default function ÇıkarılabilirDepolamaAlanı() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Cihaz Tercihleri / Depolama Ayarları / Çıkarılabilir Depolama Alanı
      </p>
      <Box className="container">
        <h1>Çıkarılabilir Depolama Alanı</h1>
        <h2>Not:</h2>
        <ul>
          <li>
            Çıkarılabilir depolama alanı sadece televizyona harici bir veri ortamı takıldığında menüde görüntülenir.
          </li>
        </ul>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
