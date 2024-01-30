import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/icons/back.png"
import { Box } from "@mui/material";

export default function FavoriListesiOluşturma() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Favori Listesi Oluşturma
      </p>
      <Box className="container">
        <h1>Favori Listesi Oluşturma</h1>
        <p classname="text">Favori Kanallarınızı liste halinde kaydedebilirsiniz.</p>
        <h2>Notlar:</h2>
        <ul>
          <li>
            Tüm kaynaklar için (uydu, kablo ve anten) favori listeleri ayrı ayrı oluşturulmalıdır.
          </li>
          <li>
            Favori kanallarınızı 4 ayrı liste halinde kaydedebilirsiniz.
          </li>
          <li>
            Kanallar favori listesine eklenmeden önce eklenecek favori listesi seçilmelidir.
          </li>
        </ul>
        <ol>
          <li>
            <b>Kanal Düzenleyici</b> menüsünde favori listesine eklemek istediğniz kanal/kanlları
            seçip <Circle className="inline-icon button"/> düğmesiyle işaretleyin.
          </li>
          <li>
            Favori listesini seçmek için <Circle className="inline-icon red button"/> (kırmızı) düğmesine basın.
          </li>
          <li>
            Kanallar ekleyeceğiniz favori listesini <Circle className="inline-icon button-red button"/> (kırmızı), <Circle className="inline-icon button-green button"/> (yeşil), 
            <Circle className="inline-icon button-yellow button"/> (sarı) veya <Circle className="inline-icon button-blue button"/> (mavi) düğmeleriyle seçin (FAV 1 ila FAV 4).
          </li>
          <li>
            <b>
              Kanal Düzenleyici</b> menüsünden çıkmak için {" "}<img src={back} className="inline-icon"/> ardından, <b>Evet</b>'i
              seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}
