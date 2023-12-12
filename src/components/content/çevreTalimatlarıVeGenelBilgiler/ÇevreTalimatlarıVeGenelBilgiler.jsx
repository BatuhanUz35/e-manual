import React from "react";
import "../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";

export default function ÇevreTalimatlarıVeGenelBilgiler() {
  return (
    <div className="page">
      <p>Anasayfa / Çevre Talimatları ve Genel Bilgiler</p>
      <div className="container">
       <h1>Çevre Talimatları ve Genel Bilgiler</h1>
        <h2>Ek bilgiler</h2>
        <div className="link-container">
          <LinkIcon /> <Link to="/çevre-talimatları-ve-genel-bilgiler/yönetmelik-ve-atık" className="link">AEEE Yönetmeliğine Uyum ve Atık Ürünün Elden Çıkarılması</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/çevre-talimatları-ve-genel-bilgiler/pil-atıkları" className="link">Pil Atıkları ile İlgili Bilgiler</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/çevre-talimatları-ve-genel-bilgiler/ambalaj-imha" className="link">Ambalajın İmha Edilmesi ile İlgili Bilgiler</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/çevre-talimatları-ve-genel-bilgiler/pcb-uygunluğu" className="link">PCB Uygunluğu ile İlgili Bilgiler</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/çevre-talimatları-ve-genel-bilgiler/arayüz-kriterleri" className="link">Arayüz Kriterleri ile İlgili Bilgiler</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/çevre-talimatları-ve-genel-bilgiler/enerji-tasarrufu" className="link">Enerji Tasarrufu ile İlgili Bilgiler</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/çevre-talimatları-ve-genel-bilgiler/durağan-resimler" className="link">Durağan Resimler ile İlgili Bilgiler</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/çevre-talimatları-ve-genel-bilgiler/yazılım-güncelleme" className="link">Yazılım Güncellemesi ile İlgili Bilgiler</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/çevre-talimatları-ve-genel-bilgiler/elektromanyetik-gürültü" className="link">Elektromanyetik Gürültü ile İlgili Bilgiler</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/çevre-talimatları-ve-genel-bilgiler/ab-direktifleri" className="link">AB Direktifleri</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/çevre-talimatları-ve-genel-bilgiler/türkiyedeki-müşteriler" className="link">Türkiye'deki Müşteriler İçin Not</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/çevre-talimatları-ve-genel-bilgiler/arka-kapak-işaretler" className="link">Cihazın Arka Kapağında Bulunabilecek İşartler ile İlgili Bilgiler</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/çevre-talimatları-ve-genel-bilgiler/lisanslar" className="link">Lisanslar ile İlgili Bilgiler</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/çevre-talimatları-ve-genel-bilgiler/kablosuz-lan-1" className="link">Kablosuz LAN Modülü Spesifikasyonu</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/çevre-talimatları-ve-genel-bilgiler/kablosuz-lan-2" className="link">Kablosuz LAN Modülü Spesifikasyonu</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/çevre-talimatları-ve-genel-bilgiler/blueetoth" className="link">Bluetooth(*) Modülü Spesifikasyonu</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/çevre-talimatları-ve-genel-bilgiler/yetkili-satıcılar" className="link">Yetkili Satıcılar İçin Servis Bilgileri</Link>
        </div>
        <div className="link-container">
          <LinkIcon /> <Link to="/çevre-talimatları-ve-genel-bilgiler/kablosuz-wlan" className="link">Kablosuz (WLAN) Bağlantı İçin Notlar</Link>
        </div>
      </div>
    </div>
  );
}
