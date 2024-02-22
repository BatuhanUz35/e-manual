import React from "react";
import "../style.css";
import battery from "../../../assets/images/safety/TV_icons_WEEE_battery.png";
import { Box } from "@mui/material";

export default function PilAtıkları() {
  return (
    <Box className="page">
      <p>Ana sayfa / Çevre Talimatları ve Genel Bilgiler / Pil Atıkları ile İlgili Bilgiler</p>
      <Box className="container">
        <h1>Pil Atıkları ile İlgili Bilgiler</h1>
        <Box className="uyarı-başlık blue-bg">DUYURU</Box>
        <Box className="uyarı-container">
          <img src={battery} alt="battery" className="icon"></img>
          <Box>
            <p className="uyarı-içerik">
              Pilleri, evsel atıklarla birlikte atmayın. Kullanılmış piller, perakende
              mağazalarına veya genel toplama noktalarına teslim edilmelidir. Böylece çevrenin
              korunmasına yardımcı olabilirsiniz.
            </p>
            <p className="uyarı-içerik">
              Pil veya cihaz ambalajı üzerinde bulunan bu sembol, bu cihazla birlikte verilen
              pilin evsel atık olarak değerlendirilmemesi gerektiğini göstermektedir.Bazı piller
              üzerinde, bu sembol kimyasal bir sembolle birlikte kullanılabilir. Pillerin içindeki 
              cıva oranı %0,0005'den fazlaysa cıva için HG kimyasal sembolü, kurşun oranı %0,004'ten
              fazlaysa kurşun için Pb kimyasal sembolü eklenir.
            </p>
          </Box>
        </Box>
        <hr className="uyarı-bitiş blue-bg"/>
      </Box>
    </Box>
  );
}
