import React from "react";
import "../style.css";
import { ol } from "./BissAnahtarı_"
import tv_icon from "../../../assets/images/icons/tv_icon.png";
import back from "../../../assets/images/icons/back.png";

import { Box } from "@mui/material";

export default function BissAnahtarı() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / BISS Anahtarı</p>
      <Box className="container">
        <h1>BISS Anahtarı</h1>
        <p>Biss anahtarı bir şifreleme tekniğidir. Biss anahtarı ile şifrelenmiş bir frekansı Biss anahtarını girerek izleyebilirsiniz.</p>
        <h2>Not:</h2>
        <ul>
          <li>
            BISS Anahtarı sadece yayın kaynağı Uydu seçildiğinde menüde görüntülenir.
          </li>
        </ul>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            BISS Anahtarı birden fazla frekans için girilebilir. Farklı frekanslara Biss anahtarı eklemek için 2 ila 13. 
            adımları tekrarlayın.
          </li>
        </ul>
        <ol start={ol.length+1}>
          <li>
            Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon"/> veya
            yayına dönmek için <img src={tv_icon} alt="TV" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}

