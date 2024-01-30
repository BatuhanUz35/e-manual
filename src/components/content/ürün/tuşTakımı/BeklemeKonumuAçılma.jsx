import React from "react";
import "../../style.css";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Box } from "@mui/material";

export default function BeklemeKonumuAçılma() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ürününüz / Tuş Takımı / Cihazın Bekleme Konumundan Açılması</p>
      <Box className="container">
        <h1>Cihazın Bekleme Konumundan Açılması</h1>
        <ol>
          <li>
            Televizyonu bekleme konumundan açmak için<PowerSettingsNewIcon className="inline-icon"/>
            düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}
