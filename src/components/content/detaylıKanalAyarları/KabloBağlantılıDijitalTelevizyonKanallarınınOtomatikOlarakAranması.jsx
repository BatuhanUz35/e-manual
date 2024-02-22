import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol, ol_2 } from "./KabloBağlantılıDijitalTelevizyonKanallarınınOtomatikOlarakAranması_";

export default function KabloBağlantılıDijitalTelevizyonKanallarınınOtomatikOlarakAranması() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Detaylı Kanal Ayarları / Kablo Bağlantılı Dijital Televizyon Kanallarının Otomatik Olarak Aranması
      </p>
      <Box className="container">
        <h1>
        Kablo Bağlantılı Dijital Televizyon Kanallarının Otomatik Olarak Aranması
        </h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            Tarama modu <b>Tam</b> seçildiğinde <b>Frekans (KHz)</b> ve <b>Ağ Kimliği</b> menüde görüntülenmez.
          </li>
        </ul>
        <ol start={ol.length+1}>
          {ol_2.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
