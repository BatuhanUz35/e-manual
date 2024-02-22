import React from "react";
import "./style.css";
import { Box } from "@mui/material";
import info from "../../assets/images/icons/info.png"

export default function Sözlük() {
 
  return (
    <Box className="page">
      <p>Ana sayfa / Sözlük</p>
      <Box className="container">
        <h1>Sözlük</h1>
        <Box className="uyarı-başlık blue-bg">DUYURU</Box>
        <Box className="uyarı-container">
          <img src={info} alt="Info" className="icon"></img>
          <Box>
            <b className="uyarı-içerik">
             Anlatılan özellikler sadece bilgilendirme amaçlıdır. Tüm özellikler, tüm televizyon modellerinde bulunmaz.
            </b>
          </Box>
        </Box>
        <hr className="uyarı-bitiş blue-bg" />

        <h2>ARC</h2>
        <p>ARC (Ses Dönüş Kanalı) ile televizyon programının ses sinyali HDMI kablosu veya çok kanallı yükselticiye sahip optik kablo ile çalınabilir.</p>

        <h2>Ağ Adı (SSID)</h2>
        <p>Ağ adı (SSID - servis seti tanımlayıcısı) IEEE 802,11 tabanlı bir kablosuz ağın tanımlanması için kullanılan bir terimdir. Her bir kablosuz LAN'da kablosuz 
          ağı benzersiz olarak tanımlayan bir yapılandırılabilir SSID bulunur. Ağ adının karakter sırası 64 karakter uzunluğa kadar çıkabilir. Bir kablosuz LAN'ın taban istasyonunda 
          (erişim noktası) yapılandırılır ve erişen tüm istemcilere ayarlanır.</p>

        <h2>Ağ Geçidi</h2>
        <p>Ağ geçidi tamamen farklı protokollere bağlı olabilecek ağların birbirleri ile iletişim kurmasına olanak sağlar. Ev ortamında router ve DSL modem kombinasyonu bir 
          İnternet Ağ Geçidi olarak kullanılır.</p>
        
        <h2>Ağ Maskesi</h2>
        <p>Ağ maskesi veya alt ağ maskesi olarak bilinen maske bir IP Adresini ağ bölümüne ve cihaz/host bölümüne ayıran bir bit maskesidir. Yönlendirme kararları almak için IP ağlarında kullanılır.</p>

        <h2>Alan Adı Sistemi</h2>
        <p>Alan adı sistemi (DNS) İnternet'teki en önemli hizmetlerden biridir. Ana fonksiyonu İnternet adresini, karşılık gelen IP Adresine dönüştürmektir.</p>

        <h2>Arka Işık</h2>
        <p>Arka aydınlatma için manuel ayar (sadece dinamik arka aydınlatma "KAPALI" olarak seçiliyse aktiftir). Bu ayar ayrıca güç tüketimini doğrudan etkiler.</p>

        <h2>Blok Parazit Azaltma</h2>
        <p>Bu fonksiyon yalnızca dijital alım kaynaklarıyla ve AV ön ayarlarıyla seçilebilmektedir. MPEG sıkıştırmasından kaynaklanan dijital programlardan gelen (DVB-T alıcılarından ve düşük aktarım 
          oranlarından ya da DVD oynatıcılardan gelenler gibi) kusurlardan (piksel blokları) kaynaklı paraziti azaltır.</p>

        <h2>Canlı Renk</h2>
        <p>Renk kontrastını ve kontrast ayarını arttırır. Bu ayar çoğunlukla normal görüntülerle kullanım için çok güçlüdür ve sadece gerekli olursa kullanılmalıdır (düşük veya kapalı) aksi halde görüntüdeki ince ayrıntılar baskılanabilir.</p>

        <h2>Dinamik Arka Işık</h2>
        <p>Cihaz burada ortalama görüntü parlaklığına bağlı olarak arka ışıklandırmayı düzenleyerek resim içeriğinin arka ışıklandırmasını en uygun şekilde ayarlar. Bir görüntüde çoğunlukla karanlık 
          bölgeler varsa gösterilen siyah seviyesi, arka ışıklandırmanın aşağı doğru ayarlanmasıyla (bu durumda karanlık bölgelerin görüntüsü geliştirilir) ve bu bölgeleri daha parlak görüntüleyebilmek 
          için aynı zamanda çoğunlukla parlak olan resim malzemesiyle arka ışıklandırma arttırılır.</p>

        <h2>Dinamik Kontrast</h2>
        <p>Bu fonksiyon, görüntüleri analiz ederek ve ardından kontrasttaki değişime bağlı olarak bunu değiştirerek ilgili resim içeriğinin kontrastını dinamik ve optimal olarak ayarlar. Kontrasttaki bu artış aynı zamanda resimdeki görünebilir parlaklık düzeylerini de düşürebilir.</p>
        
        <h2>DiSEqC</h2>
        <p>DiSEqC (Dijital Uydu Cihazı Kumandası) motorlu veya çoklu LNB'li kompleks uydu sistemlerinin kontrolünü sağlayan bir dijital sistemdir. DiSEqC'e iki veya daha fazla uydu konumunun kontrol edilmesi gerektiğinde ihtiyaç duyulur.</p>
        
        <h2>DiSEqC 1.0</h2>
        <p>Bir anten üzerinde birden fazla LNB kullanılması ve/veya birden fazla anten kullanılıp farklı uydu sinyalleri alınması durumunda kullanılır. DiSEqC1.0 maksimum 4 LNB ya da 4 Anten destekleyebilir.</p>

        <h2>DiSEqC 1.1</h2>
        <p>Çoklu LNB ya da anten kullanılan sistemlerde (çaprazlama, cascading) kullanım içindir. DiSEqC 1.1 maksimum 16 LNB ya da 16 Anten destekleyebilir.</p>

        <h2>DiSEqC 1.2</h2>
        <p>Motorlu anten sistemlerini destekler. Anten motorları televizyon üzerinden manual kontrol edilebilir.</p>

        <h2>Donanım Versiyonu</h2>
        <p>Bu bağlamda donanım, cihazı ifade eder. Buna işlemci, ekran, vs. tüm parçalar dahildir.</p>

        <h2>Donanım Yazılım Versiyonu</h2>
        <p>Donanım yazılımı (Firmware), programlanan bir çipe (mikro kumanda) gömülü yazılıma verilen addır. EPROM veya EEPROM olmak üzere genellikle bir flaş bellekte depolanır. Donanım yazılımında cihazı kontrol etmek için fonksiyonlar bulunur.</p>

        <h2>DVB-C</h2>
        <p>DVB-C (Dijital Video Yayını – Kablo) kablo bağlantısı ile dijital radyo ve televizyon sinyallerinin iletimi için kullanılan bir DVB türüdür.</p>

        <h2>DVB-S/S2</h2>
        <p>DVB-S/S2 (Dijital Video Yayını – Uydu) DVB sinyallerinin uydu üzerinden yayınlanması içindir.</p> 

        <h2>DVB-T/T2</h2>
        <p>DVB-T/T2 (Dijital Video Yayını – Karasal) karasal kanallarla dijital radyo ve televizyon sinyallerinin iletimi için kullanılan bir DVB türüdür.</p> 

        <h2>Film Modu</h2>
        <p>Tüm kanal kaynaklarındaki uzun metrajlı filmleri tespit eder ve işler. Yani daima en uygun görüntüyü alırsınız.</p> 
        <p>Bu, TV oynatımında 480i, 576i ve 1080i modlarında ve diğer kanal kaynakları için çalışır.</p>
        <p>"Film modu", uzun metrajlı film sinyali olmayan programlar için açılırsa donuk görüntü, hatalı altyazılar veya resimdeki ince çizgiler gibi önemsiz sorunlar oluşabilir.</p>
        
        <h2>Gama</h2>
        <p>Bu ayar, hangi dijital aktarım değeri için hangi parlaklık değerinin gösterileceğini belirler. Çoğu kayıtlar 2,2'lik gama değeriyle aktarılır (tüm Windows bilgisayarları ve MAC işlem sistemli daha yeni bilgisayarlar bununla çalışır,
           daha eski MAC sistemleri ve renk profili bulunmayan aktarımlar çoğunlukla 1,8'lik bir gama değeriyle çalışır).</p> 

        <h2>Güvenlik (WEP/WPA)</h2>
        <p>WEP (kablolu eşdeğer gizlilik), WLAN için standart şifreleme algoritmasıdır. Hem ağa erişimi kontrol eder hem de verilerin gizliliği ve bütünlüğünü sağlar. Bu işlem bu günlerde güvensiz olarak görülmektedir. Bu nedenle, yeni WLAN 
          sistemlerinde daha güvenli olan WPA şifreleme kullanılmalıdır.</p> 

        <h2>HbbTV</h2>
        <p>HbbTV video tekstin interaktif ardılı olup modern tasarımlı içeriğe, yüksek çözünürlükte görüntüye ve video dizini ile medya kütüphanelerine sahiptir.</p> 
        <p>HbbTV'nin tam işlevsel olabilmesi için, televizyon İnternete bağlı olmalıdır.</p>

        <h2>HD / Full HD / UHD (4K)</h2>
        <p>Yüksek Çözünürlüklü (HD) Televizyon Arttırılmış dikey, yatay ve zamansal çözünürlüğe sahip bir televizyon standardına verilen genel addır.</p> 
        <p>Full HD, 1920x1080 piksel HD çözünürlük verebilen veya kaydedebilen HDTV özellikli cihazların bir özelliğidir.</p>
        <p>UHD (4K) için çözünürlük 3840 x 2160'tır.</p>

        <h2>HDMI CEC</h2>
        <p>Bu özellik CEC (Tüketici Elektronik Kontrolü) protokolünü kullanır.</p> 
        <p>CEC, HDMI kablosu ile HDMI soketine bağlı harici cihazların uzaktan kumanda ile kontrol edilmesini sağlar.</p>

        <h2>IP Adresi</h2>
        <p>IP Adresi (İnternet Protokolü Adresi) bir IP ağındaki bilgisayarlar ve diğer cihazların adreslerini benzersiz olarak belirlemek için kullanılır. IP adreslerinin kullanıldığı en bilindik ağ İnternettir. 
          Burada örneğin web sunucuları IP Adresi kullanılarak adreslenir. IP Adresi router tarafından otomatik olarak verilebilir (otomatik adres) veya routerdan manüel olarak girilebilir (sabit adres). Manuel olarak girildiğinde bu adres TV'ye girilmelidir.</p> 

        <h2>JPEG</h2>
        <p>JPEG, Joint Picture Experts Group’un kısaltmasıdır. Görüntü verilerinin sıkıştırılması işlemidir.</p> 

        <h2>LNB</h2>
        <p>Alçak Parazit Bloğu parabolik antenin merkezinde bulunur.</p> 
        <p>Örn. 10.7–11.75 veya 11.8–12.75 GHz arası uydu frekanslarını 950–2150 MHz aralığında uygular ve koaksiyel kablo (ayrıca son zamanlarda fiberoptik kablolarla) kablo iletimini ve uydu alıcı ile alımını sağlar.</p>

        <h2>MP3</h2>
        <p>Sıkıştırılmış ses dosyası formatı.</p> 

        <h2>Mükemmel Netlik</h2>
        <p>Hafif bir mavi renk tonuyla genel görüntüyü geliştirir (daha iyi bir keskinlik sağlayarak) ve bunu tamamen özel bir siyah tonundan tamamen siyah renge ayarlayarak siyah seviyesini arttırır. Bu sayede resmin karanlık bölgelerindeki görünen gri değerleri düşürülür.</p> 

        <h2>NAS (Ağa Bağlı Depolama)</h2>
        <p>NAS kısaltması bir sabit sürücüden ağa veri gönderen cihazlar için kullanılır.</p> 

        <h2>Ortak Arayüz</h2>
        <p>DVB alıcılarında kullanılan bir arayüzdür. Şifreli kanallar, yalnızca şifreleme sistemine ve ilgili akıllı karta uygun bir CA modülüyle izlenebilir.</p> 

        <h2>Özel IP Adresi</h2>
        <p>Özel IP Adresleri İnternete bağlı olmayan özel IP adreslerine aittir. LAN gibi özel ağlar için herkes tarafından kullanılabilir. Çoğu bilgisayar ağı, IP seviyesinde tam bağlantı ancak İnternete sınırlı bağlantı gerektirir. Bu tür bir bilgisayar ağında özel IP Adresi dizisi varsa, 
          İnternet routerları özel adres dizilerini yok saydığı için İnternetten erişilemeyen bir intranet ağı oluşturur. Bu özel ağa bağlanan ve özel IP Adresi ile birlikte İnternette açık adresleri bulunan bir Ağ geçidi veya router İnternete bağlantıyı sağlar. Bu bir vekil sunucu veya NAT/PAT/gizlenme 
          kullanılarak yapılabilir. Adres dizisi sadece özel ağdan görüntülenebildiği için aynı dizi diğer özel ağlarda da kullanılabilir. İnternet protokolünün gerektirdiği IP Adreslerinin benzersiz özelliği bu kısıtlı görünürlük ile sağlanır.</p> 
          
        <h2>Parazit Azaltma</h2>
        <p>Resmi bir miktar daha keskin göstererek ve hafif bulandırma oluşturarak görünen "karlı" bölgeleri azaltır. Dolayısıyla iyi resim malzemesi olduğunda en az düzeyde kullanılmalıdır.</p> 

        <h2>Router</h2>
        <p>Router birçok bilgisayar ağını birbirine bağlayan bir ağ bileşenidir. Router (3. Katman bilgilerine dayanarak) aldığı bir protokolün ağ paketlerini analiz eder ve bunu amaçlanan bir hedef ağına iletir. Normal routerlar uygulama katmanının 3. katmanında çalışır. Bir routerda bağı olan her ağ için bir arayüz 
          bulunur. Veri alındığında, router, hedefe giden doğru yolu ve bu sayede verinin aktarılabileceği uygun arayüzü belirler. Bunun için belli bir ağa hangi router ile erişilebileceğini belirleyen lokal olarak mevcut yönlendirme tablosunu kullanır.</p> 

        <h2>SCR (Tek Kanallı Router)</h2>
        <p>Tek Kablo Sistemi EN 50494.</p> 
        <p>Anten sisteminizde çok anahtarlı tek kablo sistemi bulunuyorsa, bu anten sistemine bağlı televizyonlar programları birbirinden bağımsız olarak alabilir.</p>

        <h2>Sembol Oranı</h2>
        <p>Dijital iletim teknolojisinde birim zamanda iletilen sembollerin miktarıdır.</p> 

        <h2>Transponder</h2>
        <p>Bir frekansta çeşitli vericilerin toplanması.</p> 

        <h2>Vekil Sunucu</h2>
        <p>Vekil veya Vekil sunucu, bilgisayar ağları için veri transferini yöneten bir servis programıdır. Veri transferini daha hızlı hale getirir ve ayrıca erişim kontrolü mekanizmalarını uygulayarak güvenliği de artırabilir. Aktarım, bir bilgisayar ağındaki bilgisayarlar veya programlar arasında gerçekleşir. 
          Sunucu tarafında, vekil bir istemci görevi görür, istemci tarafında ise sunucu görevi görür.</p> 

        <h2>Wi-Fi</h2>
        <p>Internet ve Intranet paketlerinin kablosuz iletimi.</p> 

        <h2>WMA</h2>
        <p>Bu formatlar CD kalitesinde olmasına rağmen çok küçük bir alan kaplayan ses dosyalarının kaydedilmesine ve oynatılmasına olanak sağlar.</p> 
      </Box>
    </Box>
  );
}
