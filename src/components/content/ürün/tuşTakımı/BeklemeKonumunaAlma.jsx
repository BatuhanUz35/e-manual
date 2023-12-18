import React from "react";
import "../../style.css";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Circle } from "@mui/icons-material";

export default function BeklemeKonumunaAlma() {
  return (
    <div className="page">
      <p>Anasayfa / Ürününüz / Tuş Takımı / Cihazın Bekleme Konumuna Alınması</p>
      <div className="container">
        <h1>Cihazın Bekleme Konumuna Alınması</h1>
        <ol>
          <li>
            Chiazı bekleme konumuna almak için <PowerSettingsNewIcon className="inline-icon"/>
            düğmesine 5 sn basın.
            <div><ArrowForwardIcon className="inline-icon xs"/> Kapat menüsü görüntülenir.</div>
          </li>
          <li>
            Tamam seçeneğini seçip <Circle className="inline-icon button"/> düğmesiyle onaylayın.
          </li>
          <li>
            Televizyon bekleme konumuna geçer.
          </li>
        </ol>
      </div>
    </div>
  );
}
