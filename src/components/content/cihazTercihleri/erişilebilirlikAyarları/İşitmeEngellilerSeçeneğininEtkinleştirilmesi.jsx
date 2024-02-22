import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./İşitmeEngellilerSeçeneğininEtkinleştirilmesi_";

export default function İşitmeEngellilerSeçeneğininEtkinleştirilmesi() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Cihaz Tercihleri / Erişilebilirlik Ayarları / İşitme Engelliler Seçeneğinin Etkinleştirilmesi
      </p>
      <Box className="container">
        <h1>İşitme Engelliler Seçeneğinin Etkinleştirilmesi</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
