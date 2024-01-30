import React from "react";
import "../style.css";
import { Box } from "@mui/material";

export default function ÇocukSavunmasızKişiVeEvcilHayvanGüvenliği() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Güvenlik Talimatları / Çocuk, Savunmasız Kişi ve Evcil Hayvan Güvenliği</p>
      <Box className="container">
        <h1>Çocuk, Savunmasız Kişi ve Evcil Hayvan Güvenliği</h1>
        <ul>
          <li>
            Elektrikli ürünler, çocuklar ve evcil hayvanlar için tehlikelidir. Çocuklar ve evcil
            hayvanlar ürünle oynamamalı, ürünün üzerine tırmanmamalı.
          </li>
          <li>
            Çocuklarınızı televizyonun üzerine konulduğu sehpa'ya veya mobilya'ya tırmanma ve
            televizyona ulaşma tehlikeleri konusunda uyarınız.
          </li>
          <li>
            Temizlik ve kulannıcı bakım işlemleri kendilerine nezaret eden biri olmadığı sürece
            çocuklar tarafından gerçekleştirilmemelidir.
          </li>
          <li>
            Ambalaj malzemelerini çocuklardan uzak tutun. Yaralanma ve boğulma tehlikesi vardır.
          </li>
          <li>
            Ürünü atmadan önce çocukların güvenliği için elektrik fişini kesin ve çalışmaz duruma getirin.
          </li>
        </ul>
      </Box>
    </Box>
  );
}
