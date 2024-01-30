import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/icons/back.png"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";

export default function KanalYeriniDeğiştirme() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Kanal Silme
      </p>
      <Box className="container">
        <h1>Kanal Silme</h1>
        <ol>
          <li>
          <b>Kanal Düzenleyici</b> menüsünde silmek 
          istediğiniz ilk kanalı seçip <Circle className="inline-icon button"/> düğmesiyle işaretleyin.
          </li>
          <li>
          <Circle className="inline-icon button-blue button"/> (mavi) düğmesine basın.
          <Box><ArrowForwardIcon className="inline-icon xs"/>Kanal/kanallar silinmiştir</Box>
          </li>
          <li>
            <b>
              Kanal Düzenleyici</b> menüsünden çıkmak için {" "}<img src={back} alt="geri" className="inline-icon"/> ardından, <b>Evet</b>'i
              seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}
