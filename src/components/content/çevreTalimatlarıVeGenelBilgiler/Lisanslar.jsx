import React from "react";
import "../style.css";
import hdmi from "../../../assets/images/in-page-images/hdmi.png";
import { Box } from "@mui/material";

export default function Lisanslar() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Çevre Talimatları ve Genel Bilgiler / Lisanslar ile İlgili Bilgiler
      </p>
      <Box className="container">
        <h1>Lisanslar İle İlgili Bilgiler</h1>
        <img src={hdmi} alt="hdmi"></img>
        <ul>
          <li>HDMI, the HDMI logo and High-Definition Multimedia Interface are
            trademarks or registered trademarks of HDMI Licensing LLC.
          </li>
          <li>
            DTS patentleri için bkz. http://patents.dts.com DTS Licensing Limited'in
            lisansı altında üretilmiştir DTS, DTS-HD logosu, Amerika Birleşik Devletleri
            ve diğer ülkelerde DTS, Inc. tescilli ticari markaları veya ticari
            markalarıdır. @ 2021 DTS, Inc. TÜM HAKLARI SAKLIDIR.
          </li>
          <li>
            Dolby, Dolby Vision, Dolby Atmos ve Double-D sembolü, Dolby Laboratories
            Licensing Corporation'ın tescilli ticari markalarıdır. Dolby Laboratories'in
            lisansı altında üretilmiştir. Gizli Yayımlanmamış Çalışmalar. Telif Hakkı @ 2012-2021
            Dolby Laboratories. Her hakkı saklıdır.
          </li>
          <li>
            Google Assistant'ın kullanılabilirliği bölgeye göre değişir. Google, YouTube,
            Android TV, Chromecast built-in ve diğer ticari markalar Google LLC'ye ait ticari markalardır.
          </li>
        </ul>
        
      </Box>
    </Box>
  );
}
