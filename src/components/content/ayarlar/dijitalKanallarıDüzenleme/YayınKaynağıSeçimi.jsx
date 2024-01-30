import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";

export default function YayınKaynağıSeçimi() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Yayın Kaynağı Seçimi
      </p>
      <Box className="container">
        <h1>Yayın Kaynağı Seçimi</h1>
        <p classname="text">
          Tüm kaynaklar için uydu (Standart), uydu (Operatör), kablo ve anten olarak kanal
          tablosu ayrı ayrı saklanmaktadır. Düzenleme yapmak için öncelikle düzenleyeceğiniz 
          yayın kaynağını seçin.
        </p>
        <ol>
          <li>
            <b>Kanal Düzenleyici</b> menüsünden <b>Kaynak</b> seçeneğini seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Uydu</b>, <b> Kablo</b> veya <b>Anten</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
            <Box><ArrowForwardIcon className="inline-icon xs"/> Seçtiğiniz kaynağa ait kanal listesi görüntülenir.</Box>
          </li>
        </ol>
      </Box>
    </Box>
  );
}
