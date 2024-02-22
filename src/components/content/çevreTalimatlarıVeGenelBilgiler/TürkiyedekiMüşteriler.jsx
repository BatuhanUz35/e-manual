import React from "react";
import "../style.css";
import { Box } from "@mui/material";

export default function TürkiyedekiMüşteriler() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Çevre Talimatları ve Genel Bilgiler / Türkiye'deki Müşteriler İçin Not
      </p>
      <Box className="container">
        <h1>Türkiye'deki Müşteriler İçin Not</h1>
        <p>
          Bu cihazın WLAN (Wifi) özelliği sadece bina içerisinde kullanılır. Türkiye'de bina dışında
          kullanımı yasaktır. Bina dışı kullanımında WLAN (Wifi) özelliğinin kapalı olduğundan emin olunuz.
        </p>
      </Box>
    </Box>
  );
}
