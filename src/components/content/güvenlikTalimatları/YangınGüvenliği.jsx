import React from "react";
import "../style.css";
import fire from "../../../assets/images/safety/TV_icons_Fire_danger.png";

export default function YangınGüvenliği() {
  return (
    <div className="page">
      <p>Anasayfa / Güvenlik Talimatları / Yangın Güvenliği</p>
      <div className="container">
        <h1>Yangın Güvenliği</h1>
        <div className="uyarı-başlık red-bg">DİKKAT</div>
        <div className="uyarı-container">
          <img src={fire} alt="electric" className="icon"></img>
          <div>
            <p className="uyarı-içerik">
              ÖNEMLİ GÜVENLİK TALİMATLARI. TALİMATLARI İLERİDE BAŞVURMAK ÜZERE
              SAKLAYIN
            </p>
            <p className="uyarı-içerik">
              Hemen ardından: Bu cihaz ile birlikte verilen tüm güvenlik
              uyarılarını, talimatları, çizimler ve teknik özellikleri dikkate
              alın.
            </p>
          </div>
        </div>
        <hr className="uyarı-bitiş red-bg"/>
        <ul>
          <li>Ürün üzerindeki havalandıma açıklıklarını kapatmayın.</li>
          <li>
            Şimşekli ve fırtınalı havalarda, elektrik fişini ve anten fişini
            mutlaka çekin.
          </li>
          <li>Mumları ya da diğer açık alevleri televizyondan uzak tutun.</li>
          <li>
            Pilleri doğrudan güneş ışığı, ateş vb. aşırı ısı kaynaklarına maruz
            bırakmayın.
          </li>
          <li>
            Sadece aynı türden (marka, ebat, özellik) pilleri kullanın.
            Kullanılmış ve yeni pilleri birlikte kullanmayın.
          </li>
          <li>
            Ürünü nemden koruyun. Ürün üzerine su dolu kaplar (vazolar gibi)
            koymayın.
          </li>
        </ul>
      </div>
    </div>
  );
}
