import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol1, önemli, ol2 } from "./ÇıkarılabilirDepolamaAlanınıDahiliDepolamaAlanıOlarakKullanma_";

export default function ÇıkarılabilirDepolamaAlanınıDahiliDepolamaAlanıOlarakKullanma() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Cihaz Tercihleri / Depolama Ayarları / Çıkarılabilir Depolama Alanını Dahili Depolama Alanı Olarak Kullanma
      </p>
      <Box className="container">
        <h1>Çıkarılabilir Depolama Alanını Dahili Depolama Alanı Olarak Kullanma</h1>
        <p>Bir harici veri ortamını cihaz depolama alanı olarak ayarlayabilir ve böylece cihaza için indireceğiniz uygulamaları bu depolama alanına yükleyebilirsiniz.</p>
        <ol>
          {ol1.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Önemli:</h2>
        <ul>
          {önemli.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
        <ol start={ol1.length+1}>
          {ol2.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
