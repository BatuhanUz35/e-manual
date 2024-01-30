import React from "react";
import "../../style.css";
import { ol } from "./UygulamalarınZorlaDurdurulması_";
import { Box } from "@mui/material";

export default function UygulamalarınZorlaDurdurulması() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Android TV / Uygulama Ayarları / Uygulamaların Zorla Durdurulması
      </p>
      <Box className="container">
        <h1>Uygulamaların Zorla Durdurulması</h1>
        <p>
        Bir uygulama herhangi bir nedenle yanıt vermemesi durumunda zorla durdurabilirsiniz.
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
