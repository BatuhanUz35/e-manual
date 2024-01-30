import React from "react";
import "../../style.css";
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import right from "../../../../assets/images/icons/right.png";
import left from "../../../../assets/images/icons/left.png";
import tv_icon from "../../../../assets/images/icons/tv_icon.png"
import { Box } from "@mui/material";

export default function SpdifGecikmesi() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ayarlar / Ses Ayarları / SPDIF Gecikmesi</p>
      <Box className="container">
        <h1>SPDIF Gecikmesi</h1>
        <ol>
          <li>
            Ses menüsünden <b>SPDIF Gecikmesi</b>'ni seçin.
            <Box>
              <ArrowForwardIcon className="inline-icon xs"/> 
              <img src={left} alt="sol" className="inline-icon sm"/> veya <img src={right} alt="sağ" className="inline-icon sm"/> düğmesiyle değeri seçin.
            </Box>
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
