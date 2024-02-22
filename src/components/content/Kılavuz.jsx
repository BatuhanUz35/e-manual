import React from "react";
import "./style.css";
import caution from "../../assets/images/safety/Caution-Icon.png"
import info from "../../assets/images/icons/info.png"
import elektrik from "../../assets/images/safety/voltage_voltage_new.png"
import guide from "../../assets/images/icons/guide.png"
import { Box, Table, TableCell, TableRow } from "@mui/material";

export default function kılavuz() {
 
  return (
    <Box className="page">
      <p>Ana sayfa / Lütfen önce bu kılavuzu okuyun!</p>
      <Box className="container">
        <h1>Lütfen önce bu kılavuzu okuyun!</h1>
        <p>Değerli Müşterimiz,</p>
        <p>
          Bu ürünü tercih ettiğniz için teşekkür ederiz. Yüksek kalite ve
          teknoloji ile üretilmiş olan ürününüzün size en iyi verimi sunmasını
          istiyoruz. Bunun için, bu kılavuzun tamamını ve verilen diğer
          belgeleri ürünü kullanmadan önce dikkatle okuyun ve bir başvuru
          kaynağı olarak saklayın. Ürünü başka birisine verirseniz, kullanma
          kılavuzunu da birlikte verin. Kullanma kılavuzunda belirtilen tüm
          bilgi ve uyarıları dikkate alarak talimatlara uyun.
        </p>
        <p>
          Bu kullanma kılavuzunun başka modeller için de geçerli olabileceğini
          unutmayın.
        </p>
        <p>
          Kullanma kılavuzu birden fazla model içeriyorsa, modeller arasındaki
          farklar kılavuzda açık bir şekilde belirtilmiştir.
        </p>
        <h2>Semboller ve açıklamaları</h2>
        <h4>
          Kullanma kılavuzunda ve ürün üzerinde şu semboller yer almaktadır:
        </h4>
        <Table>
          <TableRow>
            <TableCell class="table-cell column-sm"><img src={caution} alt="Caution" className="icon"/></TableCell>
            <TableCell class="table-cell">Ölüm veya yaralanmalarda sonuçlanabilecek tehlike.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="table-cell column-sm"><img src={info} alt="Info" className="icon"/></TableCell>
            <TableCell class="table-cell">Önemli bilgiler veya kullanımla igili faydalı ipuçları.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="table-cell column-sm"><img src={elektrik} alt="Electric" className="icon"/></TableCell>
            <TableCell class="table-cell">Elektrik çarpmasına karşı uyarı.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="table-cell column-sm"><img src={guide} alt="kılavuz" className="icon"/></TableCell>
            <TableCell class="table-cell">Kullanma kılavuzunu okuyun.</TableCell>
          </TableRow>
        </Table>
      </Box>
    </Box>
  );
}
