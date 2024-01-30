import React from "react";
import "../style.css";
import { Box } from "@mui/material";

export default function EnerjiTasarrufu() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Çevre Talimatları ve Genel Bilgiler / Enerji Tasarrufu
        İle İlgili Bilgiler
      </p>
      <Box className="container">
        <h1>Enerji Tasarrufu İle İlgili Bilgiler</h1>
        <ul>
          <li>Aşağıda anlatılan işlemler sayesinde, doğal kaynakların tüketimini azaltabilir
            ve elektrik faturalarınızı düşürerek para tasarrufu yapabilirsiniz.
          </li>
          <li>Eğer televizyonunuzu bir süre kullanmayacaksanız, bekleme konumuna (stand-by) alın. 
            Bekleme konumunda, televizyon çok az enerji kullanır (&le; 0,5W).</li>
          <li>Eğer cihazı uzun bir süre boyunca kullanmayacaksanız, fişini prizden çeki.</li>
          <li>
            Cihaz üzerinde açma/kapama düğmesi varsa, bu düğmeyi kullanarak cihazı kapatmanız da 
            yeterli olacaktır. Böylece cihazın elektrik tüketimi hemen hemen 0 Watt'a inecektir.
          </li>
          <li>
            Eğer cihazınızı kapatırsanız ya da elektrik bağlantısını keserseniz, açılma zamanlayıcısı
            ve programlanmış kayıtlar çalışmayacaktır.
          </li>
          <li>
            Cihaz için, güneş ışığının ekrana yansımayacağı bir yer seçin. Böylece daha düşük bir arka
            ışık seçilebilir ve enerji tasarrufu sağlanır
          </li>
          <li>
            Cihazınız, parlaklık ayarı azaltıldığında daha az enerji harcayacaktır.
          </li>
        </ul>
      </Box>
    </Box>
  );
}
