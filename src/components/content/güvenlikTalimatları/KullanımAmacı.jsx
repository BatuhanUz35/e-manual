import React from "react";
import "../style.css";
import { Box } from "@mui/material";

export default function KullanımAmacı() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Güvenlik Talimatları / Kullanım Amacı</p>
      <Box className="container">
        <h1>Kullanım Amacı</h1>
        <ul>
          <li>
            Ürününüz kuru odalarda kullanım amacıyla tasarlanmıştır.
          </li>
          <li>
            Ürün ile birlikte verilen ayak ile veya uygun bir VESA montaj kiti ile kullanın.
          </li>
          <li>
            Ürün, öncelikle televizyon programlarının, içerik akışlarının izlenmesi ve harici
            cihazlardaki müzik/video içeriklerinin dinlenmesi / izlenmesi için tasarlanmıştır.
            Başka türlü bir kullanım kesinlikle yasaktır.
          </li>
          <li>
            Bir bilgi ekranı veya esasen bir bilgisayar monitörü gibi kullanımlar için
            tasarlanmamıştır. Eğer uzun süre boyunca sabit bir görüntü ya da tam olmayan
            formatta bir görüntü ekranda kalırsa, ekranda kalıcı izler belirebilir.
            Bu, bir garanti talebinde kullanılabilecek bir kusur değildir.
          </li>
        </ul>
      </Box>
    </Box>
  );
}