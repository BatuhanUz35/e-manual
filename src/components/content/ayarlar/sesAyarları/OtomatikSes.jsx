import React from "react";
import "../../style.css";
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png";
import tv_icon from "../../../../assets/images/icons/tv_icon.png"
import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function OtomatikSes() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ayarlar / Ses Ayarları / Otomatik Ses</p>
      <Box className="container">
        <h1>Otomatik Ses</h1>
        <p classname="text">
          Televizyon kanalları farklı ses seviyelerinde yayınlanır. Otomatik Ses Düzeyi Denetimi fonksiyonu, kanal değiştirdiğinizde
          sesin aynı seviyede kalmasını sağlar.
        </p>
        <ol>
          <li>
            Ses menüsünden <b>Otomatik Ses Düzeyi Denetimi</b>'ni seçip <Circle className="inline-icon button"/> düğmesiyle 
            <b> Açık</b> veya <b>Kapalı</b> konumunu seçin.
          </li>
          <li>
            Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon"/>, Home menüsüne dönmek
            için <img src={home} alt="home" className="inline-icon"/> veya TV yayınına dönmek için
            {" "}<img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}
