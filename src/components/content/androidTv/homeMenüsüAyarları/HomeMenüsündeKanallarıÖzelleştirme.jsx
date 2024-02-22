import React from "react";
import "../../style.css";
import { ol } from "./HomeMenüsündeKanallarıÖzelleştirme_";
import { Box } from "@mui/material";

export default function HomeMenüsündeKanallarıÖzelleştirme() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Android TV / Home Menüsü Ayarları / Home Menüsünde Kanalları
        Özelleştirme
      </p>
      <Box className="container">
        <h1>Home Menüsünde Kanalları Özelleştirme</h1>
        <p>
          Home menüsü kanallar halinde düzenlenmiştir. Bu kanallar yüklü
          uygulamaların içeriklerinden oluşmaktadır. Bu kanalları
          özelleştirebilir ve kendi tercihinize göre görüntülenmesini
          sağlayabilirsiniz.
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
