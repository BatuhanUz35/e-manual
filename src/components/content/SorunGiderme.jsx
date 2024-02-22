import React from "react";
import "./style.css";
import { Box } from "@mui/material";


export default function SorunGiderme() {
 
  return (
    <Box className="page">
      <p>Ana sayfa / Sorun Giderme</p>
      <Box className="container">
        <h1>Sorun Giderme</h1>
        <p>Aşağıdaki belirtilen çözümler işe yaramazsa, lütfen yetkili servis / satıcısı ile 
          iletişim kurun. Arızalara video kayıt cihazları veya uydu alıcıları gibi harici cihazların da neden olabileceğini unutmayın.</p>
        <h4>Not:</h4>
        <p>Bu, Sınıf A kapsamında bir üründür. Çalışma sırasında, cihaz radyo parazitine neden olabilir. Bu durumda, kullanıcının bunu düzeltmesi gerekebilir. 
          Lütfen uzman yetkili satıcınızla iletişim kurun.</p>

        <h2>Ekran açık Sinyal Yok mesajı.</h2>
        <ul><li>Anten kablosu takılı değil {">>>"} Anten kablosunu takın.</li></ul>

        <h2>Ekran açık Kanal Yok mesajı.</h2>
        <ul><li>Kanal araması yapılmamış {">>>"} Kanal Araması yapın.</li></ul>

        <h2>Düşük görüntü kontrastı.</h2>
        <ul>
          <li>Görüntü ayarları yanlış ayarlanmış {">>>"} Parlaklık, kontrast, renk ve gelişmiş resim ayarını yapın.</li>
          <li>Yayında sorun var {">>>"} Farklı bir kanala geçip test edin.</li>
        </ul>

        <h2>Görüntü ve / veya seste parazit.</h2>
        <ul><li>TV’nin yakınındaki diğer cihazlardan kaynaklı parazit {">>>"} Cihazın pozisyonunu değiştirin.</li></ul>

        <h2>Görüntüde gölge, yansıma ve / veya donma.</h2>
        <ul>
          <li>Kanal ayarı {">>>"} Otomatik veya manuel kanal ayarı yapın.</li>
          <li>Anten ayarı {">>>"} Anten kablosunu veya sistemini kontrol ettirin.</li>
        </ul>

        <h2>Renk yok.</h2>
        <ul>
          <li>Renk yoğunluğu minimumda {">>>"} Renk ayarını arttırın.</li>
          <li>TV standart ayarı (ayar seçeneği varsa) {">>>"} Doğru renk standardını seçin.</li>
          <li>Yayında sorun var {">>>"} Başka bir kanalda test edin.</li>
        </ul>

        <h2>Görüntü var ses yok.</h2>
        <ul>
          <li>Ses seviyesi minimumda {">>>"} Sesi açın.</li>
          <li>Mute yapılmış {">>>"} mute düğmesine veya Ses arttırma düğmesine basın.</li>
          <li>Yayında sorun var {">>>"} Başka bir kanalda test edin.</li>
        </ul>

        <h2>Uzaktan kumanda çalışmıyor.</h2>
        <ul>
          <li>Optik bağlantı yok {">>>"} Uzaktan kumandayı televizyona doğru dik tutun.</li>
          <li>Uzaktan kumanda pilleri azalmış veya bitmiş {">>>"} Pilleri kontrol edin gerekliyse değiştirin.</li>
          <li>Çalışma koşulu tanımsız {">>>"} Varsa ana güç düğmesini basarak yada fişi prizden çekerek televizyonu yaklaşık 2 dk kapatın.</li>
        </ul>

        <h2>Görüntü bilgisayar modunda koyu renkte.</h2>
        <ul><li>Bilgisayardaki görüntü çözünürlüğü ve görüntü frekansı yanlış  {">>>"} Bilgisayardaki ayarı değiştirin (örneğin görüntü çözünürlüğü 1280 x 768, görüntü frekansı 60Hz).</li></ul>

        <h2>Ekranda bağlantı sorunları ile ilgili uyarılar.</h2>
        <ul>
          <li>Ağ Kablosu takılı değil {">>>"} Ağ kablosunu takın.</li>
          <li>Kablosuz ağ bağlantısı yok {">>>"} Kablosuz ağ bağlantı ayarlarını kontrol edin.</li>
          <li>Modemin internet bağlantısı olmayabilir ya da sorunlu olabilir {">>>"} Modeminiz internete çıktığında emin olun.</li>
        </ul>

        <h2>Kablosuz bağlantıda video uygulamalarında videolar takılarak oynuyor.</h2>
        <ul><li>Internet Bağlantı hızı düşük {">>>"} İnternet Bağlantı hızı düşüklüğü abone olduğunuz paketteki hızınızla ya da internet altyapısındaki bir sorunla ilgilidir. İnternet servis sağlayıcınızla ile iletişime geçin.</li></ul>

        <h2>Kablolu bağlantıda video uygulamalarında videolar takılarak oynuyor.</h2>
        <ul><li>Internet Bağlantı hızı düşük {">>>"} İnternet Bağlantı hızı düşüklüğü abone olduğunuz paketteki hızınızla ya da internet altyapısındaki bir sorunla ilgilidir. İnternet servis sağlayıcınızla ile iletişime geçin.</li></ul>
      </Box>
    </Box>
  );
}
