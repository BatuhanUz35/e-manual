import React from "react";
import "../../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";

export default function DijitalKanallarıDüzenleme() {
  return (
    <div className="page">
      <p>Anasayfa / Ayarlar / Dijital Kanalları Düzenleme</p>
      <div className="container">
        <h1>Dijital Kanalları Düzenleme</h1>
        <p>
          Arama sonunda bulunan kanallar her yayın kaynağı için ayrı ayrı saklanır.
        </p>
        <p>
          Kanal yönetimi ile kanalların sıralamasını değiştirebilir, kanal atlayabilir, kanalları
          yeniden adlandırabilir ve kanal listesini temizleyebilirsiniz. Ayrıca favori listesini oluşturabilir
          ve favori listenizi düzenleyebilirsiniz.
        </p>
        <p>
          Televizyon kanallarını <b>Kanallar</b> menüsünden düzenleyebileceğiniz gibi televizyonunuzda yerleşik olarak 
          bulunan <b>Kanal Düzenleyici</b> uygulaması ile kanalları kolayca düzenleyebilirsiniz.
        </p>
        <h2>Ek bilgiler</h2>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/dijital-kanalları-düzenleme/kanal-düzenleyici" className="link">
            Kanal Düzenleyici Uygulamasını Başlatma
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/dijital-kanalları-düzenleme/yayın-kaynağı-seçimi" className="link">
            Yayın Kaynağı Seçimi
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/dijital-kanalları-düzenleme/favori-listesi-oluşturma" className="link">
            Favori Listesi Oluşturma
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/dijital-kanalları-düzenleme/favori-listesinde-kanal-taşıma" className="link">
            Favori Listesinde Kanal Taşıma
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/dijital-kanalları-düzenleme/favori-listesinde-kanal-yeri-değiştirme" className="link">
            Favori Listesinde Kanal Yeri Değiştirme
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/dijital-kanalları-düzenleme/favori-listesinden-kanal-silme" className="link">
            Favori Listesinden Kanal Silme
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/dijital-kanalları-düzenleme/kanal-taşıma" className="link">
            Kanal Taşıma
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/dijital-kanalları-düzenleme/kanal-yerini-değiştirme" className="link">
            Kanal Yerini Değiştirme
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/dijital-kanalları-düzenleme/kanal-silme" className="link">
            Kanal Silme
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/dijital-kanalları-düzenleme/kanal-listesini-silme" className="link">
            Kanal Listesini Silme
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/dijital-kanalları-düzenleme/kanal-düzenleme" className="link">
            Kanal Düzenleme
          </Link>
        </div>
        <div className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/dijital-kanalları-düzenleme/kanal-atlatma" className="link">
            Kanal Atlatma
          </Link>
        </div>
      </div>
    </div>
  );
}
