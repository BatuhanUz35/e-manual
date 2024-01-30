import React from "react";
import "../style.css";
import { Box } from "@mui/material";


export default function TuşTakımı() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ayarlar / Hazırlık</p>
      <Box className="container">
        <h1>Hazırlık</h1>
        <p classname="text">
          Televizyonda, temel ayarlamaları yaparak adım adım size yardımcı olmak zere bir
          "kurulum yardımcısı" bulunmaktadır.
        </p>
        <p classname="text">
          Kullanıcı, ekran diyalog penceresini kullanarak karmaşık gibi görünen ayarlamaları ve veri
          girişlerini bastiçe ve herkes tarafından anlaşılacak şekilde yapabilir.
        </p>
        <p classname="text">
          Sayfalar ve diyalog öğeleri ekranda görünür, burada da ileriki ve muhtemel işlem
          adımları tanımlanır.
        </p>
        <h2>Ev ağına bağlanma ayarları</h2>
        <p classname="text">Ev ağı bağlantısına bağlı olarak televizyonunuzu ev ağına bağlayınız:</p>
        <ul>
          <li>
            bir LAN bağlantısı ile veya
          </li>
          <li>
            WLAN ile kablosuz ağ bağlantısı
          </li>
        </ul>
        <h2>Televizyon kanallarının ayarlanması</h2>
        <p classname="text">
          Bağlı olan anten türüne bağlı olarak hangi televizyon kanallarını aramak
          istedeğinize karar verebilirsiniz.
        </p>
        <h2>DVB-S dijital uydu kanalları</h2>
        <p classname="text">
          Dijital televizyon kanallarını ayarlar.
        </p>
        <p classname="text">
          Bu arama için iki seçeneğiniz vardır:
        </p>
        <ol>
          <li>
            Standart bir seçimi önceden ayarlayan temel kurulum, örneğin; Astra uydusu 19.2&deg;
            Doğu; sadece aramayı başlatmanız gerekmektedir.
          </li>
          <li>
            Alıcınızın sistemi için gerekli tüm ayarlamaları yapmanızı ve parametreleri
            ayarlamanızı sağlayan profesyonel kurulum.
          </li>
        </ol>
        <h2>DVB-C dijital kablolu kanallar</h2>
        <p classname="text">Dijital kablolu televizyon kanallarının ayarlanması için bakınız sayfa 21</p>
        <h2>DVB-T dijital karasal kanallar</h2>
        <p classname="text">Dijital karasal televizyon kanallarının ayarlanması için bakınız sayfa 21</p>
        <h2>Not:</h2>
        <p classname="text">
          Dijital televizyon kanal ayarları hakkında daha fazla bilgi için Detaylı Kanal Ayarları
          bölümüne bakın.
        </p>
      </Box>
    </Box>
  );
}
