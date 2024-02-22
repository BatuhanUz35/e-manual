import React from "react";
import "../../style.css";
import { Box } from "@mui/material";

export default function TüketiciElektroniğiKontrolü() {
  return (
    <Box className="page">
      <p>Ana sayfa / Harici Cihaz Kullanma / CEC (Tüketici Elektroniği Kontrolü) / Harici Cihazın Bekleme Konumundan Açılması</p>
      <Box className="container">
        <h1>Harici Cihazın Bekleme Konumundan Açılması</h1>
        <p>
          Harici cihazınızı (örneğin DVD oynatıcı) bekleme konumundan açtığınızda, televizyonunuzda bekleme konumundan açılarak harici 
          cihazın bağlı olduğu HDMI kaynağına geçecektir.
        </p>
        <p>
          Harici cihazın özelliklerine bağlı olarak, (örn. AV alıcı) açılabilir ve televizyon bekleme konumunda kalabilir.
        </p>
      </Box>
    </Box>
  );
}
