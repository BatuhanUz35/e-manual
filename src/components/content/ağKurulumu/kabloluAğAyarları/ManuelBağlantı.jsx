import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./ManuelBağlantı_";

export default function ManuelBağlantı() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ağ Kurulumu / Kablolu Ağ Ayarları / Manuel Bağlantı</p>
      <Box className="container">
        <h1>Manuel Bağlantı</h1>
        <p>
          Bazı ağlar Statik IP adresi gerektirir. Ağınız Statik bir IP adresi gerektiriyorsa, <b>IP Adresi</b>, <b>Netmask</b>, <b>Gateway</b> ve internet erişimi için gereksinim 
          duyulan <b>DNS</b> değerlerini omanuel olarak girmelisiniz. <b>IP Adresi</b>, <b>Netmask</b>, <b>Gateway</b> ve <b>DNS</b> değerlerini, (ISS) Internet Servis Sağlayıcınızdan alabilirsiniz.
        </p>
        <ol>
        {ol.map((li) => {
          return ( 
            <li>{li}</li>
          )})}
        </ol>
      </Box>
    </Box>
  );
}
