import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/icons/back.png"
import tv_icon from "../../../../assets/images/icons/tv_icon.png"
import options from "../../../../assets/images/icons/options.png"
import right from "../../../../assets/images/icons/right.png"
import home from "../../../../assets/images/icons/home.png"
import { Box } from "@mui/material";


export default function KanalListesiniSilme() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Kanal Listesini Silme
      </p>
      <Box className="container">
        <h1>Kanal Listesini Silme</h1>
        <ol>
          <li>
            Tv moduna geçmek için <img src={tv_icon} alt="TV" className="inline-icon"/> düğmesine basın.
          </li>
          <li>
            <img src={options} alt="seçenekler" className="inline-icon"/> ardından <img src={right} alt="sağ" className="inline-icon"/> düğmesiyle
            <b>Ayarlar</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Kanal</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Kanallar</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Kanal Listesini Temizle</b>'yi seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Silme işlemini onaylamak için <b>Tamam</b>'ı veya işlemi iptal etmek için <b>İptal</b>'i
            seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon"/>, Home menüsüne
            dönmek için <img src={home} alt="home" className="inline-icon"/>, veya
            TV yayınına dönmek için <img src={tv_icon} alt="TV" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}
