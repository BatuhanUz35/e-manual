import React from "react";
import "./style.css";
import caution from "../../assets/images/safety/Caution-Icon.png"
import info from "../../assets/images/Info.png"
import electric from "../../assets/images/safety/voltage_voltage_new.png"
import book from "../../assets/images/Book.png"

export default function Anasayfa() {
  return (
    <div className="page">
      <p>Anasayfa / Lütfen önce bu kılavuzu okuyun!</p>
      <div className="container">
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
        <table>
          <tr class="row">
            <td class="column-1"><img src={caution} alt="Caution" className="icon"/></td>
            <td class="column-2">Ölüm veya yaralanmalarda sonuçlanabilecek tehlike.</td>
          </tr>
          <tr class="row">
            <td class="column-1"><img src={info} alt="Info" className="icon"/></td>
            <td class="column-2">Önemli bilgiler veya kullanımla igili faydalı ipuçları.</td>
          </tr>
          <tr class="row">
            <td class="column-1"><img src={electric} alt="Electric" className="icon"/></td>
            <td class="column-2">Elektrik çarpmasına karşı uyarı.</td>
          </tr>
          <tr class="row">
            <td class="column-1"><img src={book} alt="Book" className="icon"/></td>
            <td class="column-2">Kullanma kılavuzunu okuyun.</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
