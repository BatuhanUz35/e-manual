import React from "react";
import "../../style.css";
import { Box } from "@mui/material";

export default function OtomatikBağlantı() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ağ Kurulumu / Kablolu Ağ Ayarları / Otomatik Bağlantı</p>
      <Box className="container">
        <h1>Otomatik Bağlantı</h1>
        <p>
          Birçok ev ağı Dinamik Ağdır. Dinamik bir ağa sahipseniz, DHCP destekleyen bir DSL modem kullanmalısınız. 
          DHCP’yi destekleyen modemler ve IP paylaştırıcılar, <b>IP Adresi</b>, <b>Netmask</b>, <b>Gateway</b> ve internet erişimi 
          için gereksinim duyulan <b>DNS</b> değerlerini otomatik olarak alırlar, böylece televizyonunuz otomatik olarak ağa bağlanır.
        </p>
        <h2>Not:</h2>
        <ul>
          <li>
            Dinamik bir ağa sahip değilseniz manuel bağlantı bölümündeki adımları takip edin.
          </li>
        </ul>
      </Box>
    </Box>
  );
}
