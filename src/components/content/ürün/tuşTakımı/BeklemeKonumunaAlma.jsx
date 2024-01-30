import React from "react";
import "../../style.css";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function BeklemeKonumunaAlma() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ürününüz / Tuş Takımı / Cihazın Bekleme Konumuna Alınması</p>
      <Box className="container">
        <h1>Cihazın Bekleme Konumuna Alınması</h1>
        <ol>
          <li>
            Chiazı bekleme konumuna almak için <PowerSettingsNewIcon className="inline-icon"/>
            düğmesine 5 sn basın.
            <Box><ArrowForwardIcon className="inline-icon xs"/> Kapat menüsü görüntülenir.</Box>
          </li>
          <li>
            Tamam seçeneğini seçip <Circle className="inline-icon button"/> düğmesiyle onaylayın.
          </li>
          <li>
            Televizyon bekleme konumuna geçer.
          </li>
        </ol>
      </Box>
    </Box>
  );
}
