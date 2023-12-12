import React from "react";
import "../style.css";

export default function BakımVeTemizlikGüvenliği() {
  return (
    <div className="page">
      <p>Anasayfa / Güvenlik Talimatları / Bakım Ve Temizlik Güvenliği</p>
      <div className="container">
        <h1> Bakım Ve Temizlik Güvenliği</h1>
        <div className="flex-container">
          <h4>UYARI:&nbsp;</h4>
          <p>
            Kurulum, bakım, temizlik ve tamir işlemleri sırasında ürünün fişini
            prizden çıkarın
          </p>
        </div>
        <ul>
          <li>
            Ürün kabinini kuru veya hafif nemlendirilmiş yumuşak bir bezle temizleyin.
            </li>
            <li>
              Islak bez ve deterjan (Cam Temizleyici deterjanlar, kolonya ve diğer tüm temizlik kimyasalları) kullanmayın.

            </li>
            <li>
              Ürünün ekranını yumuşak bir bezle bastırmadan silerek temizleyin. Su veya
              deterjanlı su kullanmayın.
            </li>
            <li>
              Temizlik işlemlerinde alkol, benzin, tiner, ispirto, amonyak veya aşındırıcı
              madde içeren deterjanlar kullanmayın.
            </li>
            </ul>
      </div>
    </div>
  );
}
