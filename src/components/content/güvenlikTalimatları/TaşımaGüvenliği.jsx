import React from "react";
import "../style.css";

export default function TaşımaGüvenliği() {
  return (
    <div className="page">
      <p>Anasayfa / Güvenlik Talimatları / Taşıma Güvenliği</p>
      <div className="container">
        <h1>Taşıma Güvenliği</h1>
        <ul>
          <li>Ürünü, taşımadan önce elektrik fişini prizden çekin.</li>
          <li>
            Ürüne bağlı anten ve varsa bağlı harici cihazları sökün.
          </li>
          <li>Ürünün orijinal ambalaj kutusu mevcut ise ambalaj kutusu, değil ise balo
            kabarcıklı ambalaja veya kalın bir mukavvaya sarın.
          </li>
          <li>
            Ürünün düşme ve devrilme risklerine karşı gerekli önlemleri alın. Ürünü taşırken
            bir yere çarpmayın ve düşürmeyin
          </li>
        </ul>
      </div>
    </div>
  );
}
