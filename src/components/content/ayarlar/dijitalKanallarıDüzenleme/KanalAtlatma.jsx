import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/icons/back.png"
import tv_icon from "../../../../assets/images/icons/tv_icon.png"
import options from "../../../../assets/images/icons/options.png"
import right from "../../../../assets/images/icons/right.png"
import home from "../../../../assets/images/icons/home.png"
import down from "../../../../assets/images/icons/down.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";


export default function KanalAtlatma() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Kanal Atlatma
      </p>
      <Box className="container">
        <h1>Kanal Atlatma</h1>
        <p classname="text">
        <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> veya
        {" "}<b>img gelcek</b> ile kanal seçim sırasında atlanmasını istediğiniz televizyon kanllarını seçebilirsiniz. Rakam düğmeleriyle atlanan
        kanallar için seçim yapmak mümkündür
        </p>
        <ol>
          <li>
            Tv moduna geçmek için <img src={tv_icon} alt="TV" className="inline-icon"/> düğmesine basın.
          </li>
          <li>
            <img src={options} alt="seçenekler" className="inline-icon"/> ardından <img src={right} alt="sağ" className="inline-icon"/> düğmesiyle 
            <b> Ayarlar</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Kanal</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Kanallar</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
            <Box></Box>
          </li>
          <li>
            <b>Kanal Atlama</b>'yı seçip <Circle className="inline-icon button"/> düğmesine basın.
            <Box><ArrowForwardIcon className="inline-icon xs"/> <b>Kanal Atlama</b> menüsü görüntülenir</Box>
          </li>
          <li>
            Kanal listesinden atlatmak istediğiniz kanal/kanalları
            seçip <Circle className="inline-icon button"/> düğmesiyle işaretleyin.
            <Box>
              <h2>Not:</h2>
              <ul>
                <li>
                  Kanal atlatma menüsünde önceki sayfayı görüntülemek için <Circle className="inline-icon button-red button"/> (kırmızı)
                  sonraki sayfayı görüntülemek için <Circle className="inline-icon button-green button"/> (yeşil) düğmesine basın.
                </li>
              </ul>
            </Box>
          </li>
          <li>
            Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon"/>, Home menüsüne
            dönmek için <img src={home} alt="home" className="inline-icon"/> veya
            TV yayınına dönmek için <img src={tv_icon} alt="TV" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}
