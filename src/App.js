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
          </Routes>
          <footer><hr />&copy; BEKO {year}</footer>
          </div>
      </div>
    </div>
  );
}

export default App;
