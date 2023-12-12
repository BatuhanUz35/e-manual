import React from "react";
import "../style.css";

export default function ElektromanyetikGürültü() {
  return (
    <div className="page">
      <p>
        Anasayfa / Çevre Talimatları ve Genel Bilgiler / Elektromanyetik Gürültü
        İle İlgili Bilgiler
      </p>
      <div className="container">
        <h1>Elektromanyetik Gürültü İle İlgili Bilgiler</h1>
        <ul>
          <li>
            Ürünle bağlantılı olarak kullanılan cihazlar (uydu alıcısı, DVD oynatıcı, vb.) ya da
            ürünün yakınındaki yayınım yapan cihazlar (modem vb.) görüntüde parazite ve seste
            gürültüye neden olabilir.
          </li>
          <li>
            Ürün üzerinde kullanılan bağlantı kabloları 3m'den küçük olmalıdır.
          </li>
          <li>
            Cihaz, elektrostatik yük boşalımı nedeniyle fonksiyonunu yerine getiremiyorsa,
            kullanıcının cihazı açıp kapatması gerekebilir.
          </li>
          <li>
            Ürün ile birlikte korumalı (shielld), HDMI sertifikalı ve ferritli kablo kullanılması gereklidir.
          </li>
          <li>
            Cihaz, elektrostatik yük boşalımı nedeniyle kurtarılamazsa, kullanıcının
            müdahale etmesi gerekir.
          </li>
        </ul>
      </div>
    </div>
  );
}
