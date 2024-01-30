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
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Kanal Yerini Değiştirme
      </p>
      <Box className="container">
        <h1>Kanal Yerini Değiştirme</h1>
        <p classname="text">
          Kanalların yerlerini karşılıklı olarak değiştirin. Örneğin; 2 numaralı kanalı 20 numaralı
          kanala, 20 numaralı kanalı 2 numaralı kanala taşıyın.
        </p>
        <ol>
          <li>
          <b>Kanal Düzenleyici</b> menüsünde taşımak karşılıklı yerini değiştirmek
          istediğiniz ilk kanalı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
          <Circle className="inline-icon button-yellow button"/> (sarı) düğmesine basın.
          </li>
          <li>
            Yer değiştirmek istediğiniz ikinci kanalı seçip <Circle className="inline-icon button"/> düğmesine basın.
            <Box><ArrowForwardIcon className="inline-icon xs"/>İki kanal karşılıklı olarak yer değiştirmiştir.</Box>
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
