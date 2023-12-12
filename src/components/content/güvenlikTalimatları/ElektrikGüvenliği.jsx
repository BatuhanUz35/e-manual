import React from "react";
import "../style.css";
import electric from "../../../assets/images/safety/voltage_voltage_new.png";

export default function ElektrikGüvenliği() {
  return (
    <div className="page">
      <p>Anasayfa / Güvenlik Talimatları / Elektrik Güvenliği</p>
      <div className="container">
        <h1>Elektrik Güvenliği</h1>
        <div className="uyarı-başlık kırmızı">UYARI</div>
        <div className="uyarı-container">
          <img src={electric} alt="electric" className="icon"></img>
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
        <hr className="uyarı-bitiş kırmızı"/>
      </div>
      <ul>
        <li>Kurulum, bakım, temizlik, tamir ve taşıma işlemleri sırasında ürünün fişi prize
          takılı olmamalıdır.
        </li>
        <li>Şebeke bağlantısı kesildiğinde bekleme (stand-by) LED'i söner. Bekleme LED'i
          yanıyorsa ürününüz şebekeye bağlı demektir.
        </li>
        <li>Ürünün içini açmayın. Açılması durumunda güvenlik riski oluşabilir ve ayrıca
          ürününüz garanti kapsamından çıkar.
        </li>
        <li>Ürün, yalnızca birlikte verilen elektrik kablosu ya da AC/DC adaptör ile çalıştırılabilir.</li>
        <li>
          Ürünü, hasar görmüş bir elektrik kablosuyla ya da AC/DC adaptörüyle (eğer birlikte verilmişse)
          kullanmayın.
        </li>
        <li>
          Eğer ürünün fişi bir topraklama kontağına sahipse, fişi sadece bir topraklama kontağına
          sahip bir prize takmanız gerekir.
        </li>
        <li>
          Ürünü elektrik prizine, yalnızca harici cihazları ve anteni bağladıktan sonra takın.
        </li>
        <li>
          Elektrik kablosu hasarlıysa oluşabilecek tehlikeleri önlemek amacıyla yetkili
          servis tarafından değiştirilmelidir.
        </li>
        <li>
          Elektrik kablosunu ürünün altına ve arkasına sıkıştırmayın. Elektrik kablosunun
          üzerine ağır bir nesne koymayın.
        </li>
        <li>
          Elektrik kablosu aşırı bükülmemeli, ezilmemeli ve herhangi bir ısı kaynağı ile temas
          etmemelidir.
        </li>
        <li>
          Ürünü çalıştırmak için uzatma kablosu, çoklu priz kullanmayın.
        </li>
        <li>
          Ürünü zamanlayıcı gibi harici bir anahtarlama cihazı yoluyla besleme yapılmamalıdır
          veya bir alet ile düzenli olarak açılan ve kapatılan bir devreye bağlanmamalıdır.
        </li>
        <li>
          Ürünün fişi kolay erişilebilir bir yerde olmalıdır. Bu mümkün değilse ürünün bağlı 
          olduğu elektrik tesisatı üzerinde elektrik yönetmeliklerine uygun ve tüm kutupları
          şebekeden ayıran bir düzenek (sigorta, anahtar, şalter, vb) bulunmalıdır.
        </li>
        <li>
          Ürünün fişine ıslak elle dokunmayın.
        </li>
        <li>
          Ürünün fişini prizden çıkarırken kablosundan değil, fişten tutarak çekin.
        </li>
      </ul>
    </div>
  );
}
