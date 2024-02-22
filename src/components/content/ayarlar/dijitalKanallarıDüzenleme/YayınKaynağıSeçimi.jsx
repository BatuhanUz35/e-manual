import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./YayınKaynağıSeçimi_";

export default function YayınKaynağıSeçimi() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Yayın Kaynağı Seçimi
      </p>
      <Box className="container">
        <h1>Yayın Kaynağı Seçimi</h1>
        <p>
          Tüm kaynaklar için uydu (Standart), uydu (Operatör), kablo ve anten olarak kanal
          tablosu ayrı ayrı saklanmaktadır. Düzenleme yapmak için öncelikle düzenleyeceğiniz 
          yayın kaynağını seçin.
        </p>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
