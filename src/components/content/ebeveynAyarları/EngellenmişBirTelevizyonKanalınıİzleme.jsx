import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./EngellenmişBirTelevizyonKanalınıİzleme_";

export default function EngellenmişBirTelevizyonKanalınıİzleme() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Ebeveyn Ayarları / Engellenmiş Bir Televizyon Kanalını İzleme
      </p>
      <Box className="container">
        <h1>Engellenmiş Bir Televizyon Kanalını İzleme</h1>
        <p>PIN kodu ile engellenmiş bir kanalı izlemek için engellenmiş televizyon kanalını seçip PIN kodu girin.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul><li>Kanal değiştirildiğinde kanal tekrar engellenecektir.</li></ul>
      </Box>
    </Box>
  );
}
