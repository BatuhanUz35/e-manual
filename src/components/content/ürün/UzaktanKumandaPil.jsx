import React from "react";
import "../style.css";
import { Box } from "@mui/material";

export default function UzaktanKumandaPil() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ürününüz / Uzaktan Kumandaya Pillerin Takılması</p>
      <Box className="container">
        <h1>Uzaktan Kumandaya Pillerin Takılması</h1>
        <ol>
          <li>Pil bölmesini açın.</li>
          <li>Pil bölmesinin alt kısmındaki işaretlere göre pilleri takın (2 x Alkalin/LR03/AAA).</li>
          <li>Pil bölmesini kapatın.</li>
        </ol>
        <p classname="text">img gelcek</p>
        <h4>Notlar:</h4>
        <ul>
          <li>
            Televizyon cihazınız uzaktan kumandanın komutlarına artık tam olarak reaksiyon göstermiyorsa
            piller bitmiş olabilir. Bitmiş piller, kesinlikle pil yuvasında bırakılmamalıdır.
          </li>
          <li>
            Kullanılmış pillerden kaynaklanan zararlardan dolayı üretici sorumluluk kabul etmemektedir.
          </li>
          <li>
            Ağır metal ihtiva etmeyenler de dahil olmak üzere, piller evsel atıklarla birlikte atılmamalıdır.
            Lütfen kullanılmış pilleri çevreye zarar vermeyecek şekilde imha edin. Bulunduğunuz bölgedeki yasal
            yönetmelikleri öğrenin.
          </li>
        </ul>
      </Box>
    </Box>
  );
}
