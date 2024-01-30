import React from "react";
import "../style.css";
import fire from "../../../assets/images/safety/TV_icons_Fire_danger.png";
import { Box } from "@mui/material";

export default function YangınGüvenliği() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Güvenlik Talimatları / Yangın Güvenliği</p>
      <Box className="container">
        <h1>Yangın Güvenliği</h1>
        <Box className="uyarı-başlık red-bg">DİKKAT</Box>
        <Box className="uyarı-container">
          <img src={fire} alt="electric" className="icon"></img>
          <Box>
            <p className="uyarı-içerik">
              ÖNEMLİ GÜVENLİK TALİMATLARI. TALİMATLARI İLERİDE BAŞVURMAK ÜZERE
              SAKLAYIN
            </p>
            <p className="uyarı-içerik">
              Hemen ardından: Bu cihaz ile birlikte verilen tüm güvenlik
              uyarılarını, talimatları, çizimler ve teknik özellikleri dikkate
              alın.
            </p>
          </Box>
        </Box>
        <hr className="uyarı-bitiş red-bg"/>
        <ul>
          <li>Ürün üzerindeki havalandıma açıklıklarını kapatmayın.</li>
          <li>
            Şimşekli ve fırtınalı havalarda, elektrik fişini ve anten fişini
            mutlaka çekin.
          </li>
          <li>Mumları ya da diğer açık alevleri televizyondan uzak tutun.</li>
          <li>
            Pilleri doğrudan güneş ışığı, ateş vb. aşırı ısı kaynaklarına maruz
            bırakmayın.
          </li>
          <li>
            Sadece aynı türden (marka, ebat, özellik) pilleri kullanın.
            Kullanılmış ve yeni pilleri birlikte kullanmayın.
          </li>
          <li>
            Ürünü nemden koruyun. Ürün üzerine su dolu kaplar (vazolar gibi)
            koymayın.
          </li>
        </ul>
      </Box>
    </Box>
  );
}
