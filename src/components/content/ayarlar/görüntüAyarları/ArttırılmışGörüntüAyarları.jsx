import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { texts } from "./ArttırılmışGörüntüAyarları_";

export default function GörüntüAyarları() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ayarlar / Görüntü Ayarları / Arttırılmış Görüntü Ayarları</p>
      <Box className="container">
        <h1>Arttırılmış Görüntü Ayarları</h1>
        {texts.map((text) => {
            return <p>{text}</p>;
          })}
      </Box>
    </Box>
  );
}
