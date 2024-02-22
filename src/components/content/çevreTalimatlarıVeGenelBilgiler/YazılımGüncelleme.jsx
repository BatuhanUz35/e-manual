import React from "react";
import "../style.css";
import { Box } from "@mui/material";

export default function YazılımGüncelleme() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Çevre Talimatları ve Genel Bilgiler / Yazılım Güncelleme
        İle İlgili Bilgiler
      </p>
      <Box className="container">
        <h1>Yazılım Güncelleme İle İlgili Bilgiler</h1>
        <ul>
          <li>
            Kullanım kılavuzunda anlatılan özellikler, açıklamalar ve resimler, TV yazılımın
            güncellenmesiyle değişebilir.
          </li>
        </ul>
      </Box>
    </Box>
  );
}
