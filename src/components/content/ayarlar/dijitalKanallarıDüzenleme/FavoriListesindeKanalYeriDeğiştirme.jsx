import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/icons/back.png"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";

export default function FavoriListesindeKanalYeriDeğiştirme() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Favori Listesinde Kanal Yeri Değiştirme
      </p>
      <Box className="container">
        <h1>Favori Listesinde Kanal Yeri Değiştirme</h1>
        <p classname="text">
          Favori listesinde kanalların yerlerini karşılıklı olarak değiştirin. Örneğin; 2 nolu
          kanalı 20 nolu kanala, 20 nolu kanalı 2 nolu kanala taşıyın.
        </p>
        <ol>
          <li>
            <b>Kanal Düzenleyici</b> menüsünde düzenlemek istediğiniz favori
            listesini seçip <Circle className="inline-icon button"/> düğmesine basın.
            <Box><ArrowForwardIcon className="inline-icon xs"/> Seçilen favori listesi kanalları görüntülenir.</Box>
          </li>
          <li>
            Karşılıklı yerini değiştirmek istediğiniz ilk kanalı 
            seçip <Circle className="inline-icon button"/> düğmesiyle işaretleyin.
          </li>
          <li>
          <Circle className="inline-icon button-yellow button"/> (sarı) düğmesine basın.
          </li>
          <li>
            Yer değiştirmek istediğiniz ikinci kanalı seçip  <Circle className="inline-icon button"/> düğmesine basın.
            <Box><ArrowForwardIcon className="inline-icon xs"/> İki kanal karşılıklı olarak yer değiştirmiştir.</Box>
          </li>
          <li>
            <b>Kanal Düzenleyici</b> menüsünden çıkmak için <img src={back} className="inline-icon"/> ardından, 
            {" "}<b>Evet</b>'i seçip <Circle className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      
      
      </Box>
    </Box>
  );
}
