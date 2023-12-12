import React from "react";
import "../style.css";

export default function KablosuzWlan() {
  return (
    <div className="page">
      <p>
        Anasayfa / Çevre Talimatları ve Genel Bilgiler / Kablosuz (WLAN) Bağlantı İçin Notlar
      </p>
      <div className="container">
        <h1>Kablosuz (WLAN) Bağlantı İçin Notlar</h1>
        <h2>Müşteriler için not:</h2>
        <p>
          Aşağıdaki bilgiler sadece Avrupa Birliği yönetmeliklerini uygulayan ülkelerde
          satılan cihazlar için geçerlidir
        </p>
        <h2>İtalya'daki müşteriler için:</h2>
        <p>
          Halka açık kullanım için, servis sağlayıcısının iznine bağlıdır.
        </p>
        <h2>Norveç'teki müşteriler için:</h2>
        <p>
          Radyo donanımı kullanımına, Ny-Alesund, Svalbord'ın merkezinden 20 km'lik bir
          yarıçap içerisindeki coğrafik alanda izin verilmemektedir.
        </p>
        <h2>Rusya'daki müşteriler için:</h2>
        <p>FHSS Modülasyonlu Kısa Menzilli Cihaz Uygulamaları.</p>
        <p>Maksimum 2.5 mW e.i.r.p.</p>
        <p>
          Yalnızca otomatik izleme ve kaynak hesaplama sistemleri için telemetri bilgilerinin
          derlenmesi amacı doğrultusunda, kurulum yüksekliğinde herhangi bir sınırlama olmaksızın
          açık hava uygulamaları için kullanıma izin verilen maksimum kısa menzilli cihaz yoğunluk
          değeri 100mW e.i.r.p'dir. Diğer amaçlar doğrultusunda bu değer yükleme
          yüksekliğinin yerden 10m'yi aşmadığı hava uygulamaları için geçerlidir.
        </p>
        <p>
          İç mekan uygulamaları için kısa menzilli cihaz yoğunluk değeri maksimum 100mW e.i.r.p'dir.
        </p>
        <p>
          DSSS'li ve FHSS dışındaki geniş bant modülasyonlu kısa menzil cihaz uygulamaları.
        </p>
        <p>
          DSSS'li ve FHSS dışındaki geniş bant modülasyonlu kısa menzil cihazların maksimum ortalama
          yoğunluk değeri 2 mW/MHz veya 100mW e.i.r.p'dir.
        </p>
        <p>
          Yalnızca otomatik izleme ve kaynak hesaplama sistemleri için telemetri bilgilerinin derlenmesi
          amacı doğrultusunda, açık hava uygulamaları için kullanıma izin verilen maksimum kısa menzilli
          cihazların yoğunluk değeri 20 mW/MHz veya 100 mW e.i.r.p'dir.
        </p>
        <p>
          İç mekan uygulamaları için kısa menzilli cihazlar maksimum yoğunluk değeri 10 mW/MHz veya 
          100 mW e.i.r.p'dir.
        </p>
        <h2>Ukrayna'daki müşteriler için:</h2>
        <p>
          İç mekan uygulamaları için, 6dBi amplifikasyon faktörüne sahip dahili antenle birlikte maksimum
          kısa menzilli cihazlar yoğunluk.
        </p>
      </div>
    </div>
  );
}
