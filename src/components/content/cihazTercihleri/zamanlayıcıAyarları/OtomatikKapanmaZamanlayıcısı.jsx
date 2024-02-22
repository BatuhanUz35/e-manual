import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol1, ol2 } from "./OtomatikKapanmaZamanlayıcısı_";

export default function OtomatikKapanmaZamanlayıcısı() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Cihaz Tercihleri / Zamanlayıcı Ayarları / Otomatik Kapanma Zamanlayıcısı
      </p>
      <Box className="container">
        <h1>Otomatik Kapanma Zamanlayıcısı</h1>
        <ol>
          {ol1.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            <b>Otomatik Açılma Zamanı</b>, <b>Açılma Zamanı Türü Açık</b> veya <b>Bir Defa</b> seçildiğinde menüde aktif olur.
          </li>
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
