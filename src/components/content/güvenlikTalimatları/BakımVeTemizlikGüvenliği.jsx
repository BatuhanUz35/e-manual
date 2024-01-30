import React from "react";
import "../style.css";
import { Box } from "@mui/material";

export default function BakımVeTemizlikGüvenliği() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Güvenlik Talimatları / Bakım Ve Temizlik Güvenliği</p>
      <Box className="container">
        <h1> Bakım Ve Temizlik Güvenliği</h1>
        <Box>
          <b>UYARI:</b> Kurulum, bakım, temizlik ve tamir işlemleri sırasında ürünün fişini prizden çıkarın.
        </Box>
        <ul>
          <li>
            Ürün kabinini kuru veya hafif nemlendirilmiş yumuşak bir bezle temizleyin.
            </li>
            <li>
              Islak bez ve deterjan (Cam Temizleyici deterjanlar, kolonya ve diğer tüm temizlik kimyasalları) kullanmayın.

            </li>
            <li>
              Ürünün ekranını yumuşak bir bezle bastırmadan silerek temizleyin. Su veya
              deterjanlı su kullanmayın.
            </li>
            <li>
              Temizlik işlemlerinde alkol, benzin, tiner, ispirto, amonyak veya aşındırıcı
              madde içeren deterjanlar kullanmayın.
            </li>
            </ul>
      </Box>
    </Box>
  );
}
