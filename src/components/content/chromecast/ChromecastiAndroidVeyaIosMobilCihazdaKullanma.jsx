import React from "react";
import "../style.css";
import { ol, notlar } from "./ChromecastiAndroidVeyaIosMobilCihazdaKullanma_";
import { Box } from "@mui/material";

export default function ChromecastiAndroidVeyaIosMobilCihazdaKullanma() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Chromecast Built-in™ / Chromecast'i Android veya iOS Mobil Cihazda Kullanma
      </p>
      <Box className="container">
        <h1>Chromecast'i Android veya iOS Mobil Cihazda Kullanma</h1>
        <p>
        Fotoğraf, video veya oyunları Chromecast özellikli bir uygulamadan veya iOS mobil cihazdan TV’ye yayınlayabilirsiniz.
        </p>
        <h2>Notlar:</h2>
        <ul>
        {notlar.map((li) => {
            return <li>{li}</li>;
          })}
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
