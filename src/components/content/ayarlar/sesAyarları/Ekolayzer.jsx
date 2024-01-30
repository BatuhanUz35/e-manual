import React from "react";
import "../../style.css";
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import right from "../../../../assets/images/icons/right.png";
import left from "../../../../assets/images/icons/left.png";
import tv_icon from "../../../../assets/images/icons/tv_icon.png"
import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Ekolayzer() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ayarlar / Ses Ayarları / Ekolayzer</p>
      <Box className="container">
        <h1>Ekolayzer</h1>
        <p classname="text">Ekolayzer, oluşturabileceğiniz bir ses ayarı sunmaktadır.</p>
        <h2>Not:</h2>
        <ul>
          <li>
            <b>Ekolayzer Ayrıntıları, Ses Stili, Kullanıcı</b> seçildiğinde menüde aktiftir.
          </li>
        </ul>
        <ol>
          <li>
            Ses menüsünden <b>Ekolayzer Ayrıntıları</b>'nı seçip <Circle className="inline-icon button"/> düğmesiyle onaylayın.
            <Box>
              <ArrowForwardIcon className="inline-icon xs"/> <b>Ekolayzer Ayrıntıları</b> menüsü görüntülenir.
            </Box>
          </li>
          <li>
            <b>120Hz</b> frekans bandı etkindir.
            <Box>
              <ArrowForwardIcon className="inline-icon xs"/> 
              <img src={left} alt="sol" className="inline-icon sm"/> veya <img src={right} alt="sağ" className="inline-icon sm"/> tercih edilen değeri ayarlayın.
            </Box>
          </li>
          <li>
            Sonraki frekans bandını seçip ayar işlemini tekrarlayın.
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
