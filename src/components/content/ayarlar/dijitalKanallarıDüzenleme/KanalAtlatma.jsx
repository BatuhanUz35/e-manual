import React from "react";
import "../../style.css";
import down from "../../../../assets/images/icons/down.png";
import channel_direction from "../../../../assets/images/icons/channel_direction.png";
import { Box } from "@mui/material";
import { ol } from "./KanalAtlatma_";


export default function KanalAtlatma() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Kanal Atlatma
      </p>
      <Box className="container">
        <h1>Kanal Atlatma</h1>
        <p>
        <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> veya
        {" "}<img src={channel_direction} alt="Kanal Yön Tuşu" className="inline-icon"/> ile kanal seçim sırasında atlanmasını istediğiniz televizyon kanllarını seçebilirsiniz. Rakam düğmeleriyle atlanan
        kanallar için seçim yapmak mümkündür
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
