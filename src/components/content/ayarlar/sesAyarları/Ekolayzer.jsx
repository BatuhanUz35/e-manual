import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./Ekolayzer_";

export default function Ekolayzer() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ayarlar / Ses Ayarları / Ekolayzer</p>
      <Box className="container">
        <h1>Ekolayzer</h1>
        <p>Ekolayzer, oluşturabileceğiniz bir ses ayarı sunmaktadır.</p>
        <h2>Not:</h2>
        <ul>
          <li>
            <b>Ekolayzer Ayrıntıları</b>, <b>Ses Stili ve Kullanıcı</b> seçildiğinde menüde aktiftir.
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
