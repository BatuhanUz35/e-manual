import React from "react";
import "../../style.css";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Box } from "@mui/material";

export default function UykuKonumu() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ürününüz / Tuş Takımı / Cihazın Uyku Konumuna Alınması ve Açılması</p>
      <Box className="container">
        <h1>Cihazın Uyku Konumuna Alınması ve Açılması</h1>
        <ol>
          <li>
            Televizyonu açık iken <PowerSettingsNewIcon className="inline-icon"/>
            düğmesine kısa basıldığında uyku konumuna geçer.
          </li>
          <li>
            Televizyonu uyku konumunda iken <PowerSettingsNewIcon className="inline-icon"/>
            düğmesine kısa basıldığında uyku konumundan açılır.
          </li>
        </ol>
      </Box>
    </Box>
  );
}
