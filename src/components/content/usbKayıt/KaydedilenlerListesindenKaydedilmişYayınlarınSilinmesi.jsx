import React from "react";
import "../style.css";
import { ol } from "./KaydedilenlerListesindenKaydedilmişYayınlarınSilinmesi_";
import { Box } from "@mui/material";

export default function KaydedilenlerListesindenKaydedilmişYayınlarınSilinmesi() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / USB Kayıt / Kaydedilenler Listesinden Kaydedilmiş Yayınların Silinmesi</p>
      <Box className="container">
        <h1>Kaydedilenler Listesinden Kaydedilmiş Yayınların Silinmesi</h1>
        <p classname="text">Kaydedilmiş yayınları Kaydedilenler listesinden silebilirsiniz..</p>
        <ol>
        {ol.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ol>
      </Box>
    </Box>
  );
}
