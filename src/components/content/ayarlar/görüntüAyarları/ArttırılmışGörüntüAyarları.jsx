import React from "react";
import "../../style.css";
import { Box } from "@mui/material";

export default function GörüntüAyarları() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ayarlar / Görüntü Ayarları / Arttırılmış Görüntü Ayarları</p>
      <Box className="container">
        <h1>Arttırılmış Görüntü Ayarları</h1>
        <p classname="text">
          "Arttırılmış görüntü ayarları" birincil dijital görüntü geliştirmelerinde bulunmaktadır ancak bunların
          sadece görüntü kalitesi ve aktarım kusursuz olduğunda gerektiğinde kullanılması gerekmektedir. Bunlar aynı 
          zamanda zayıf malzemeli görüntüyü geliştirebilir ancak aktarım ve görüntü kalitesinin kusursuz olduğu görüntüyü
          olumsuz olarak etkileyebilir.
        </p>
        <p classname="text">
          <b>Gama:</b> - Bu ayar, hangi dijital aktarım değeri için hangi parlaklık değerinin gösterileceğini belirler.
          Çoğu kayıtlar 2,2'lik gama değeriyle aktarılır (tüm Windows bilgisayarları ve MAC işletim sistemli daha yeni 
          bilgisayarlar bununla çalışır, daha eski MAC sistemleri ve renk profilsiz aktarımlar çoğunlukla 1,8'lik bir gama
          değerleriyle çalışır).
        </p>
        <p classname="text">
          <b>Renk Yönetim Sistem:</b> - Bu fonksiyon Renklerin ayrı ayrı parlaklık, kontrast ve ton ayarlarının yapılmasını 
          sağlar. Kırmızı, yeşil, mavi, macenta, siyan ve sarı renkler için bu ayarları ayrı ayrı yapmak mümkündür. 
          Bu fonksiyon ile çok spesifik içeriklerde gelişmiş ayar yapılabilir.
        </p>
        <p classname="text">
          <b>11 Noktalı Beyaz Denge Düzeltme:</b> - Bu fonksiyon farklı gri tonlarında hassas renk sıcaklığı ayarı yapar. 
          Ekranda gri tonları içeren içerik oynatıldığında bu fonksiyon ile gri tonlarının kırmızı-yeşil-mavi bileşenleri
          ayrı ayrı hassas bir şekilde ayarlanabilir.
        </p>
        <p classname="text">
          <b>Gürültü Azaltımı:</b> - Resmi bir miktar daha keskin göstererek ve hafif bulandırma oluşturarak görünen "karlı"
          bölgeleri azaltır. Dolayısıyla iyi resim malzemesi olduğunda en az düzeyde kullanılmalıdır.
        </p>
        <p classname="text">
          <b>Dijital Gürültü Azaltımı:</b> - Bu fonksiyon yalnızca dijital alım kaynaklarıyla ve AV ön ayarlarıyla seçilebilmektedir.
          MPEG sıkıştırmasından kaynaklanan dijital programlardan gelen (DVB-T alıcılarından ve düşük aktarım oranlarından ya da DVD
          oynatıcılarından gelenler gibi) kusurlardan (piksel blokları) kaynaklı paraziti azaltır.
        </p>
        <p classname="text">
          <b>Dinamik Kontrast:</b> - Bu fonksiyon, görüntüleri analiz ederek ve ardından kontrasttaki değişime bağlı olarak
          bunu değiştirerek ilgili resim içeriğinin kontrastını dinamik ve optimal olarak ayarlar. Kontrasttaki bu artış aynı
          zamanda resimdeki görünebilir parlaklık düzeylerini de düşürebilir.
        </p>
        <p classname="text">
          <b>Micro Dimming:</b> - Karanlık görüntülerde detay seviyesini arttırır. Televizyon, ekranı küçük bölgelere böler ve 
          her bölgeyi ayrı ayrı analiz ederek en doğru parlaklık değerini belirler. Böylece karanlık içeriklerde daha detaylı
          görüntü elde edilir.
        </p>
        <p classname="text">
          <b>Film Modu:</b> - Tüm kanal kaynakları için uzun filmleri tespit eder ve işler. Yani daima en uygun resmi alırsınız.
          Bu, TV oynatımında 480i, 576i ve 1080i modlarda ve diğer kanal kaynakları için çalışır. Film modu, uzun film sinyali 
          olmayan programlar için açılır ve donuk görüntü, hatalı altyazılar veya resimdeki ince çizgiler gibi önemsiz sorunlar 
          oluşabilir.
        </p>
        <p classname="text">
          <b>Maximum Canlılık:</b> - Bu fonksiyon, Yüksek kontrast ve doygun renk ayarları uygulanarak en yüksek canlılık algısı
          oluşturulur. Bu özellik açık iken "dinamik kontrast" özelliğinde değişiklik yapılamaz.
        </p>
        <p classname="text">
          <b>Cilt Rengi:</b> - Bu fonksiyon, Ten rengine özel parlaklık ve doygunluk ayarı yapılarak en doğru ten rengi elde edilir.
        </p>
        <p classname="text">
          <b>Renk Geçiş İyileştirmesi</b> - Bu fonksiyon, Renk geçişlerinde içerik kaynaklı hataları gidererek pürüzsüz renk geçişleri sağlar.
        </p>
        <p classname="text">
          <b>Düşük Mavi Işık:</b> - Bu fonksiyon, LED'lerden yayılan mavi ışık oranını azaltarak TV ekranından daha doğal ışık yayılmasını
          sağlar ve göz yorulmasını azaltır.
        </p>
        <p classname="text">
          <b>MEMC:</b> - Hareket dengeleme özelliği, Hareketli içeriklerde titreme efektlerini gidererek daha akıcı bir görüntü izleme
          deneyimi sağlar.
        </p>
      </Box>
    </Box>
  );
}
