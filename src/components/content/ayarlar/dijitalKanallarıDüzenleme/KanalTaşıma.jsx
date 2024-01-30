import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/icons/back.png"
import check from "../../../../assets/images/icons/check.png"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";


export default function KanalTaşıma() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Kanal Taşıma
      </p>
      <Box className="container">
        <h1>Kanal Taşıma</h1>
        <ol>
          <li>
          <b>Kanal Düzenleyici</b> menüsünde taşımak istediğiniz kanal/kanlları
          seçip <Circle className="inline-icon button"/> düğmesine basın.
          <Box><ArrowForwardIcon className="inline-icon xs"/> Kanal/kanallar <img src={check} className="inline-icon sm" alt="Check"/> ile işaretlenir.</Box>
          </li>
          <li>
          <Circle className="inline-icon button-green button"/> (yeşil) düğmesine basın.
          </li>
          <li>
            Yeni kanal konumunu seçip <Circle className="inline-icon button"/> düğmesine basın.
            <Box><ArrowForwardIcon className="inline-icon xs"/> Kanal/kanallar yeni kanal konumuna taşınmıştır.</Box>
          </li>
          <li>
            <b>
              Kanal Düzenleyici</b> menüsünden çıkmak için {" "}<img src={back} alt="geri" className="inline-icon"/> ardından, <b>Evet</b>'i
              seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
        </ol>
        <h2>
          Not:
        </h2>
        <ul>
          <li>
            Kanal sırasını değiştirmeniz halinde, yayıncının yollamış olduğu kanal numaraları değişecektir.
          </li>
        </ul>
      </Box>
    </Box>
  );
}
