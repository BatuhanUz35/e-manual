import React from "react";
import "../style.css";
import waste from "../../../assets/images/safety/WEEE_WEEE_Symbol.png";

export default function YönetmelikVeAtık() {
  return (
    <div className="page">
      <p>Anasayfa / Çevre Talimatları ve Genel Bilgiler / AEEE Yönetmeliğine Uyum ve Atık Ürünün Elden Çıkarılması</p>
      <div className="container">
        <h1>AEEE Yönetmeliğine Uyum ve Atık Ürünün Elden Çıkarılması</h1>
        <p>Bu ürün, T.C. Çevre ve Şehircilik Bakanlığı tarafından yayımlanan "Atık Elektrikli ve Elektronik Eşyaların Kontrolü
          Yönetmeliğinde belirtilen zararlı ve yasaklı maddeleri içermez. AEEE Yönetmeliğine uygundur.
        </p>
        <div className="uyarı-başlık blue-bg">DUYURU</div>
        <div className="uyarı-container">
          <img src={waste} alt="waste" className="icon"></img>
          <div>
            <p className="uyarı-içerik">
              Bu ürün, geri dönüşümlü ve tekrar kullanılabilir nitelikteki yüksek kaliteli
              parça ve malzemelerden üretilmiştir. Bu nedenle, ürünü, hizmet ömrünün sonunda evsel veya diğer
              atıklarla birlikte atmayın. Elektrikli ve elektronik cihazların geri dönüşümü için bir
              toplama noktasına götürün. Bu toplama noktalarını bölgenizdeki yerel yönetime sorun.
              Kullanılmış ürünleri geri kazanıma vererek çevrenin ve doğal kaynakların korunmasına yardımcı olun.
              Ürünü atmadan önce çocukların güvenliği için elektrik fişini kesin ve çalışamaz duruma getirin.
            </p>
          </div>
        </div>
        <hr className="uyarı-bitiş blue-bg"/>
      </div>
    </div>
  );
}
