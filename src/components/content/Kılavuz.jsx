import React from "react";
import "./style.css";
import caution from "../../assets/images/safety/Caution-Icon.png"
import info from "../../assets/images/icons/info.png"
import elektrik from "../../assets/images/safety/voltage_voltage_new.png"
import guide from "../../assets/images/icons/guide.png"
import { Box } from "@mui/material";

export default function kılavuz() {
 
  return (
    <Box className="page" onScroll={console.log(document.body.scrollTop)}>
      <p classname="text">Ana sayfa / Lütfen önce bu kılavuzu okuyun!</p>
      <Box className="container">
        <h1>Lütfen önce bu kılavuzu okuyun!</h1>
        <p classname="text">Değerli Müşterimiz,</p>
        <p classname="text">
          Bu ürünü tercih ettiğniz için teşekkür ederiz. Yüksek kalite ve
          teknoloji ile üretilmiş olan ürününüzün size en iyi verimi sunmasını
          istiyoruz. Bunun için, bu kılavuzun tamamını ve verilen diğer
          belgeleri ürünü kullanmadan önce dikkatle okuyun ve bir başvuru
          kaynağı olarak saklayın. Ürünü başka birisine verirseniz, kullanma
          kılavuzunu da birlikte verin. Kullanma kılavuzunda belirtilen tüm
          bilgi ve uyarıları dikkate alarak talimatlara uyun.
        </p>
        <p classname="text">
          Bu kullanma kılavuzunun başka modeller için de geçerli olabileceğini
          unutmayın.
        </p>
        <p classname="text">
          Kullanma kılavuzu birden fazla model içeriyorsa, modeller arasındaki
          farklar kılavuzda açık bir şekilde belirtilmiştir.
        </p>
        <h2>Semboller ve açıklamaları</h2>
        <h4>
          Kullanma kılavuzunda ve ürün üzerinde şu semboller yer almaktadır:
        </h4>
        <table>
          <tr class="row">
            <td class="column-sm"><img src={caution} alt="Caution" className="icon"/></td>
            <td class="column-l">Ölüm veya yaralanmalarda sonuçlanabilecek tehlike.</td>
          </tr>
          <tr class="row">
            <td class="column-sm"><img src={info} alt="Info" className="icon"/></td>
            <td class="column-l">Önemli bilgiler veya kullanımla igili faydalı ipuçları.</td>
          </tr>
          <tr class="row">
            <td class="column-sm"><img src={elektrik} alt="Electric" className="icon"/></td>
            <td class="column-l">Elektrik çarpmasına karşı uyarı.</td>
          </tr>
          <tr class="row">
            <td class="column-sm"><img src={guide} alt="kılavuz" className="icon"/></td>
            <td class="column-l">Kullanma kılavuzunu okuyun.</td>
          </tr>
        </table>
      </Box>
    </Box>
  );
}
