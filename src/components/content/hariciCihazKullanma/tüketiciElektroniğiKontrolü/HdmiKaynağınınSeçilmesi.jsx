import React from "react";
import "../../style.css";
import { Box } from "@mui/material";

export default function HdmiKaynağınınSeçilmesi() {
  return (
    <Box className="page">
      <p>Ana sayfa / Harici Cihaz Kullanma / CEC (Tüketici Elektroniği Kontrolü) / HDMI Kaynağının Seçilmesi</p>
      <Box className="container">
        <h1>HDMI Kaynağının Seçilmesi</h1>
        <p>
          Harici cihazı (örneğin DVD oynatıcı) açtığınızda, televizyonunuz harici cihazın bağlı olduğu HDMI kaynağına geçecektir. (Televizyonun açık olması gerekir).
        </p>
      </Box>
    </Box>
  );
}
