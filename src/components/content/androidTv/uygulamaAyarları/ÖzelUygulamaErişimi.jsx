import React from "react";
import "../../style.css";
import { ol } from "./ÖzelUygulamaErişimi_";
import { Box } from "@mui/material";

export default function ÖzelUygulamaErişimi() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Android TV / Uygulama Ayarları / Özel Uygulama Erişimi
      </p>
      <Box className="container">
        <h1>Özel Uygulama Erişimi</h1>
        <p>
        Uygulama erişimini düzenleyebilirsiniz.
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
