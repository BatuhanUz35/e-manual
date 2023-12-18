import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import "./App.css"
import { Routes, Route } from "react-router-dom";
import Anasayfa from "./components/content/Anasayfa";
import Kılavuz from "./components/content/Kılavuz";
import GüvenlikTalimatları from "./components/content/güvenlikTalimatları/GüvenlikTalimatları";
import KullanımAmacı from "./components/content/güvenlikTalimatları/KullanımAmacı";
import ElektrikGüvenliği from "./components/content/güvenlikTalimatları/ElektrikGüvenliği";
import YangınGüvenliği from "./components/content/güvenlikTalimatları/YangınGüvenliği";
import TaşımaGüvenliği from "./components/content/güvenlikTalimatları/TaşımaGüvenliği";
import KurulumGüvenliği from "./components/content/güvenlikTalimatları/KurulumGüvenliği";
import ÇocukSavunmasızKişiVeEvcilHayvanGüvenliği from "./components/content/güvenlikTalimatları/ÇocukSavunmasızKişiVeEvcilHayvanGüvenliği"
import BakımVeTemizlikGüvenliği from "./components/content/güvenlikTalimatları/BakımVeTemizlikGüvenliği";
import ÇevreTalimatlarıVeGenelBilgiler from "./components/content/çevreTalimatlarıVeGenelBilgiler/ÇevreTalimatlarıVeGenelBilgiler"
import YönetmelikVeAtık from "./components/content/çevreTalimatlarıVeGenelBilgiler/YönetmelikVeAtık"
import PilAtıkları from "./components/content/çevreTalimatlarıVeGenelBilgiler/PilAtıkları";
import Ambalajİmha from "./components/content/çevreTalimatlarıVeGenelBilgiler/Ambalajİmha";
import PcbUygunluğu from "./components/content/çevreTalimatlarıVeGenelBilgiler/PcbUygunluğu";
import ArayüzKriterleri from "./components/content/çevreTalimatlarıVeGenelBilgiler/ArayüzKriterleri";
import EnerjiTasarrufu from "./components/content/çevreTalimatlarıVeGenelBilgiler/EnerjiTasarrufu";
import DurağanResimler from "./components/content/çevreTalimatlarıVeGenelBilgiler/DurağanResimler";
import YazılımGüncelleme from "./components/content/çevreTalimatlarıVeGenelBilgiler/YazılımGüncelleme";
import ElektromanyetikGürültü from "./components/content/çevreTalimatlarıVeGenelBilgiler/ElektromanyetikGürültü";
import ABDirektifleri from "./components/content/çevreTalimatlarıVeGenelBilgiler/ABDirektifleri";
import TürkiyedekiMüşteriler from "./components/content/çevreTalimatlarıVeGenelBilgiler/TürkiyedekiMüşteriler";
import ArkaKapakİşaretler from "./components/content/çevreTalimatlarıVeGenelBilgiler/ArkaKapakİşaretler";
import Lisanslar from "./components/content/çevreTalimatlarıVeGenelBilgiler/Lisanslar";
import KablosuzLan1 from "./components/content/çevreTalimatlarıVeGenelBilgiler/KablosuzLan1";
import KablosuzLan2 from "./components/content/çevreTalimatlarıVeGenelBilgiler/KablosuzLan2";
import Bluetooth from "./components/content/çevreTalimatlarıVeGenelBilgiler/Bluetooth";
import YetkiliSatıcılar from "./components/content/çevreTalimatlarıVeGenelBilgiler/YetkiliSatıcılar";
import KablosuzWlan from "./components/content/çevreTalimatlarıVeGenelBilgiler/KablosuzWlan";
import Ürün from "./components/content/ürün/Ürün";
import Paketinİçindekiler from "./components/content/ürün/Paketinİçindekiler";
import KurulumVeyaAsma from "./components/content/ürün/kurulumVeyaAsma/KurulumVeyaAsma";
import AyaklıKurulum from "./components/content/ürün/kurulumVeyaAsma/AyaklıKurulum";
import VesaMontaj from "./components/content/ürün/kurulumVeyaAsma/VesaMontaj";
import UzaktanKumandaPil from "./components/content/ürün/UzaktanKumandaPil";
import ÜrünTanıtımı from "./components/content/ürün/ÜrünTanıtımı";
import TuşTakımı from "./components/content/ürün/tuşTakımı/TuşTakımı";
import BeklemeKonumuAçılma from "./components/content/ürün/tuşTakımı/BeklemeKonumuAçılma";
import BeklemeKonumunaAlma from "./components/content/ürün/tuşTakımı/BeklemeKonumunaAlma";
import UykuKonumu from "./components/content/ürün/tuşTakımı/UykuKonumu";
import AntenVeElektrikKablosu from "./components/content/ürün/antenVeElektrikKablosu/AntenVeElektrikKablosu";
import DvbsAntenBağlantısı from "./components/content/ürün/antenVeElektrikKablosu/DvbsAntenBağlantısı";
import DvbtDvbcVeAnalogAntenBağlantısı from "./components/content/ürün/antenVeElektrikKablosu/DvbtDvbcVeAnalogAntenBağlantısı";
import ElektrikBağlantısı from "./components/content/ürün/antenVeElektrikKablosu/ElektrikBağlantısı";
import UzaktanKumanda from "./components/content/ürün/UzaktanKumanda";
import Ayarlar from "./components/content/ayarlar/Ayarlar";
import Hazırlık from "./components/content/ayarlar/Hazırlık";
import Kurulum from "./components/content/ayarlar/Kurulum";
import DijitalKanallarıDüzenleme from "./components/content/ayarlar/dijitalKanallarıDüzenleme/DijitalKanallarıDüzenleme";
import KanalDüzenleyici from "./components/content/ayarlar/dijitalKanallarıDüzenleme/KanalDüzenleyici";
import YayınKaynağıSeçimi from "./components/content/ayarlar/dijitalKanallarıDüzenleme/YayınKaynağıSeçimi";
import FavoriListesiOluşturma from "./components/content/ayarlar/dijitalKanallarıDüzenleme/FavoriListesiOluşturma";
import FavoriListesindeKanalTaşıma from "./components/content/ayarlar/dijitalKanallarıDüzenleme/FavoriListesindeKanalTaşıma";
import FavoriListesindeKanalYeriDeğiştirme from "./components/content/ayarlar/dijitalKanallarıDüzenleme/FavoriListesindeKanalYeriDeğiştirme";
import FavoriListesindenKanalSilme from "./components/content/ayarlar/dijitalKanallarıDüzenleme/FavoriListesindenKanalSilme";
import KanalTaşıma from "./components/content/ayarlar/dijitalKanallarıDüzenleme/KanalTaşıma";
import KanalYeriniDeğiştirme from "./components/content/ayarlar/dijitalKanallarıDüzenleme/KanalYeriniDeğiştirme";
import KanalSilme from "./components/content/ayarlar/dijitalKanallarıDüzenleme/KanalSilme";
import KanalListesiniSilme from "./components/content/ayarlar/dijitalKanallarıDüzenleme/KanalListesiniSilme";
import KanalDüzenleme from "./components/content/ayarlar/dijitalKanallarıDüzenleme/KanalDüzenleme";
import KanalAtlatma from "./components/content/ayarlar/dijitalKanallarıDüzenleme/KanalAtlatma";
import GörüntüAyarları from "./components/content/ayarlar/görüntüAyarları/GörüntüAyarları";
import ArttırılmışGörüntüAyarları from "./components/content/ayarlar/görüntüAyarları/ArttırılmışGörüntüAyarları";
import GörüntüAyarlarınıFabrikaAyarlarınaDöndürme from "./components/content/ayarlar/görüntüAyarları/GörüntüAyarlarınıFabrikaAyarlarınaDöndürme";
import SesAyarları from "./components/content/ayarlar/sesAyarları/SesAyarları";
import SistemSesleri from "./components/content/ayarlar/sesAyarları/SistemSesleri";
import Balans from "./components/content/ayarlar/sesAyarları/Balans";
import Bas from "./components/content/ayarlar/sesAyarları/Bas";
import Tiz from "./components/content/ayarlar/sesAyarları/Tiz";
import SurroundSes from "./components/content/ayarlar/sesAyarları/SurroundSes";
import Ekolayzer from "./components/content/ayarlar/sesAyarları/Ekolayzer";
import HoparlörGecikmesi from "./components/content/ayarlar/sesAyarları/HoparlörGecikmesi";

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="">
      <Navbar className="navbar" />
      <div className="main-container">
        <Menu className="menu" />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Anasayfa />} />
            <Route path="/kılavuz" element={<Kılavuz />} />
            <Route path="/güvenlik-talimatları" element={<GüvenlikTalimatları />} />
            <Route path="/güvenlik-talimatları/kullanım-amacı" element={<KullanımAmacı />} />
            <Route path="/güvenlik-talimatları/elektrik-güvenliği" element={<ElektrikGüvenliği />} />
            <Route path="/güvenlik-talimatları/yangın-güvenliği" element={<YangınGüvenliği />} />
            <Route path="/güvenlik-talimatları/taşıma-güvenliği" element={<TaşımaGüvenliği />} />
            <Route path="/güvenlik-talimatları/kurulum-güvenliği" element={<KurulumGüvenliği />} />
            <Route path="/güvenlik-talimatları/çocuk-savunmasız-kişi-ve-evcil-hayvan-güvenliği" element={<ÇocukSavunmasızKişiVeEvcilHayvanGüvenliği />} />
            <Route path="/güvenlik-talimatları/bakım-ve-temizlik-güvenliği" element={<BakımVeTemizlikGüvenliği />} />
            <Route path="/çevre-talimatları-ve-genel-bilgiler" element={<ÇevreTalimatlarıVeGenelBilgiler />} />
            <Route path="/çevre-talimatları-ve-genel-bilgiler/yönetmelik-ve-atık" element={<YönetmelikVeAtık />} />
            <Route path="/çevre-talimatları-ve-genel-bilgiler/pil-atıkları" element={<PilAtıkları />} />
            <Route path="/çevre-talimatları-ve-genel-bilgiler/ambalaj-imha" element={<Ambalajİmha />} />
            <Route path="/çevre-talimatları-ve-genel-bilgiler/pcb-uygunluğu" element={<PcbUygunluğu />} />
            <Route path="/çevre-talimatları-ve-genel-bilgiler/arayüz-kriterleri" element={<ArayüzKriterleri />} />
            <Route path="/çevre-talimatları-ve-genel-bilgiler/enerji-tasarrufu" element={<EnerjiTasarrufu />} />
            <Route path="/çevre-talimatları-ve-genel-bilgiler/durağan-resimler" element={<DurağanResimler />} />
            <Route path="/çevre-talimatları-ve-genel-bilgiler/yazılım-güncelleme" element={<YazılımGüncelleme />} />
            <Route path="/çevre-talimatları-ve-genel-bilgiler/elektromanyetik-gürültü" element={<ElektromanyetikGürültü />} />
            <Route path="/çevre-talimatları-ve-genel-bilgiler/ab-direktifleri" element={<ABDirektifleri />} />
            <Route path="/çevre-talimatları-ve-genel-bilgiler/türkiyedeki-müşteriler" element={<TürkiyedekiMüşteriler />} />
            <Route path="/çevre-talimatları-ve-genel-bilgiler/arka-kapak-işaretler" element={<ArkaKapakİşaretler />} />
            <Route path="/çevre-talimatları-ve-genel-bilgiler/lisanslar" element={<Lisanslar />} />
            <Route path="/çevre-talimatları-ve-genel-bilgiler/kablosuz-lan-1" element={<KablosuzLan1 />} />
            <Route path="/çevre-talimatları-ve-genel-bilgiler/kablosuz-lan-2" element={<KablosuzLan2 />} />
            <Route path="/çevre-talimatları-ve-genel-bilgiler/bluetooth" element={<Bluetooth />} />
            <Route path="/çevre-talimatları-ve-genel-bilgiler/yetkili-satıcılar" element={<YetkiliSatıcılar />} />
            <Route path="/çevre-talimatları-ve-genel-bilgiler/kablosuz-wlan" element={<KablosuzWlan />} />
            <Route path="/ürün" element={<Ürün />} />
            <Route path="/ürün/paketin-içindekiler" element={<Paketinİçindekiler />} />
            <Route path="/ürün/kurulum-veya-asma" element={<KurulumVeyaAsma />} />
            <Route path="/ürün/kurulum-veya-asma/ayaklı-kurulum" element={<AyaklıKurulum />} />
            <Route path="/ürün/kurulum-veya-asma/vesa-montaj" element={<VesaMontaj />} />
            <Route path="/ürün/uzaktan-kumanda-pil" element={<UzaktanKumandaPil />} />
            <Route path="/ürün/ürün-tanıtımı" element={<ÜrünTanıtımı />} />
            <Route path="/ürün/tuş-takımı" element={<TuşTakımı />} />
            <Route path="/ürün/tuş-takımı/bekleme-konumu-açılma" element={<BeklemeKonumuAçılma />} />
            <Route path="/ürün/tuş-takımı/bekleme-konumuna-alma" element={<BeklemeKonumunaAlma />} />
            <Route path="/ürün/tuş-takımı/uyku-konumu" element={<UykuKonumu />} />
            <Route path="/ürün/anten-ve-elektrik-kablosu" element={<AntenVeElektrikKablosu />} />
            <Route path="/ürün/anten-ve-elektrik-kablosu/dvbs-anten-bağlantısı" element={<DvbsAntenBağlantısı />} />
            <Route path="/ürün/anten-ve-elektrik-kablosu/dvbt-dvbc-ve-analog-anten-bağlantısı" element={<DvbtDvbcVeAnalogAntenBağlantısı />} />
            <Route path="/ürün/anten-ve-elektrik-kablosu/elektrik-bağlantısı" element={<ElektrikBağlantısı />} />
            <Route path="/ürün/uzaktan-kumanda" element={<UzaktanKumanda />} />
            <Route path="/ayarlar" element={<Ayarlar />} />
            <Route path="/ayarlar/hazırlık" element={<Hazırlık />} />
            <Route path="/ayarlar/kurulum" element={<Kurulum />} />
            <Route path="/ayarlar/dijital-kanalları-düzenleme" element={<DijitalKanallarıDüzenleme />} />
            <Route path="/ayarlar/dijital-kanalları-düzenleme/kanal-düzenleyici" element={<KanalDüzenleyici />} />
            <Route path="/ayarlar/dijital-kanalları-düzenleme/yayın-kaynağı-seçimi" element={<YayınKaynağıSeçimi />} />
            <Route path="/ayarlar/dijital-kanalları-düzenleme/favori-listesi-oluşturma" element={<FavoriListesiOluşturma />} />
            <Route path="/ayarlar/dijital-kanalları-düzenleme/favori-listesinde-kanal-yeri-değiştirme" element={<FavoriListesindeKanalYeriDeğiştirme />} />
            <Route path="/ayarlar/dijital-kanalları-düzenleme/favori-listesinde-kanal-taşıma" element={<FavoriListesindeKanalTaşıma />} />
            <Route path="/ayarlar/dijital-kanalları-düzenleme/favori-listesinden-kanal-silme" element={<FavoriListesindenKanalSilme />} />
            <Route path="/ayarlar/dijital-kanalları-düzenleme/kanal-taşıma" element={<KanalTaşıma />} />
            <Route path="/ayarlar/dijital-kanalları-düzenleme/kanal-yerini-değiştirme" element={<KanalYeriniDeğiştirme />} />
            <Route path="/ayarlar/dijital-kanalları-düzenleme/kanal-silme" element={<KanalSilme />} />
            <Route path="/ayarlar/dijital-kanalları-düzenleme/kanal-listesini-silme" element={<KanalListesiniSilme />} />
            <Route path="/ayarlar/dijital-kanalları-düzenleme/kanal-düzenleme" element={<KanalDüzenleme />} />
            <Route path="/ayarlar/dijital-kanalları-düzenleme/kanal-atlatma" element={<KanalAtlatma />} />
            <Route path="/ayarlar/görüntü-ayarları" element={<GörüntüAyarları />} />
            <Route path="/ayarlar/görüntü-ayarları/arttırılmış-görüntü-ayarları" element={<ArttırılmışGörüntüAyarları />} />
            <Route path="/ayarlar/görüntü-ayarları/görüntü-ayarlarını-fabrika-ayarlarına-döndürme" element={<GörüntüAyarlarınıFabrikaAyarlarınaDöndürme />} />
            <Route path="/ayarlar/ses-ayarları" element={<SesAyarları />} />
            <Route path="/ayarlar/ses-ayarları/sistem-sesleri" element={<SistemSesleri />} />
            <Route path="/ayarlar/ses-ayarları/balans" element={<Balans />} />
            <Route path="/ayarlar/ses-ayarları/bas" element={<Bas />} />
            <Route path="/ayarlar/ses-ayarları/tiz" element={<Tiz />} />
            <Route path="/ayarlar/ses-ayarları/surround-ses" element={<SurroundSes />} />
            <Route path="/ayarlar/ses-ayarları/ekolayzer" element={<Ekolayzer />} />
            <Route path="/ayarlar/ses-ayarları/hoparlör-gecikmesi" element={<HoparlörGecikmesi />} />
          </Routes>
          <footer><hr />&copy; BEKO {year}</footer>
          </div>
      </div>
    </div>
  );
}

export default App;
