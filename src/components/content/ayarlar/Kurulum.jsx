import React from "react";
import "../style.css";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import back from "../../../assets/images/png/back.png"
import home from "../../../assets/images/png/home.png"
import left from "../../../assets/images/png/left.png"
import right from "../../../assets/images/png/right.png"
import down from "../../../assets/images/png/down.png";
import check from "../../../assets/images/png/check.png";
import right_arrow from "../../../assets/images/png/right_arrow.png";
import one from "../../../assets/images/png/one.png";
import zero from "../../../assets/images/png/zero.png";
import { Circle } from "@mui/icons-material";

export default function Kurulum() {
  return (
    <div className="page">
      <p>Anasayfa / Ayarlar / İlk Kurulum ve Televizyonu Ayarlama</p>
      <div className="container">
        <h1>İlk Kurulum ve Televizyonu Ayarlama</h1>
        <ol>
          <li>Anten ve harici cihaz kablolarını bağlayın.</li>
          <li>Elektrik fişini prize takın.</li>
          <li>
            Televizyonu, uzaktan kumandadaki
            <PowerSettingsNewIcon className="inline-icon" /> düğmesiyle açın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              Bir süre sonra ekranda <b>Hoş geldiniz</b> menüsü görüntülenir
            </div>
            <h2>img gelcek</h2>
          </li>
          <li>
            Dil seçimini yapın.
          </li>
          <li>
            Aksesuarlar menüsü görüntülenir. Bir Bluetooth aksesuar eşleştirmek istemiyorsanız 
            {" "}<img src={back} className="inline-icon" alt="Geri"/> düğmesine basın.
          </li>
          <li>
            Bluetooth kumandayı eşleştirmek için {" "}<img src={home} className="inline-icon" alt="Home"/>
            ve {" "}<img src={left} className="inline-icon" alt="Sol"/> düğmelerine aynı anda 5sn basılı tutun.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              Kumanda üzerinde beyaz led yanıp sönmeye başlar
            </div>
          </li>
          <li>
            Bulunan Bluetooth cihazlar görüntülenir. <b>Android TV Remote Control'u</b> seçip 
            <Circle className="inline-icon button"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              Kumanda ile televizyon eşleştirme işlemi tamamlanır.
            </div>
          </li>
        </ol>
        <h2>Önemli:</h2>
        <ul>
          <li>
            Bluetooth kumandada eşleme sorunu yaşamanız durumunda kumandayı sıfırlanamanız gerekir,
            bunun için; kumandanın  {" "}<img src={home} className="inline-icon" alt="Home"/> ve {" "}<img src={left} className="inline-icon" alt="Sol"/>
            düğmelerine aynı anda 5sn. basılı tutun.
          </li>
        </ul>
        <h2>
          Not:
        </h2>
        <ul>
          <li>
            Ürünün Kırulumunu hızlı veya manuel yapabilirsiniz
            <ul>
              <li>
                <b>Hızlı Kurulum:</b> Bir Android telefon ile ağ ayarları ve hesap ayarlarını kolayca aktarın.
              </li>
              <li>
                <b>Manuel Kurulum:</b> Tüm ayarları manuel olarak girin.
              </li>
            </ul>
          </li>
        </ul>
        <h2>
          Hızlı Kurulum
        </h2>
        <ol>
          <li>
            <b>Devam</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Televizyon ve telefonunuzun ekranında görüntülenen yönergeleri izleyin.
          </li>
          <li>
            <b>Ağ Gizlilik Politikası</b> görüntülenir.
          </li>
          <li>
            <b>Kabul Et</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Hizmet Şartları</b> görüntülenir.
            </div>
          </li>
          <li>
            <b>Kabul Et</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Google Hizmetleri</b> görüntülenir.
            </div>
          </li>
          <li>
            <b>Kabul Et</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Google Asistan</b> menüsü görüntülenir.
            </div>
          </li>
          <li>
            <b>Devam</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Kişisel sonuçları almak için <b>Aç</b>'ı seçip <Circle className="inline-icon button"/> düğmesine
            basın veya <b>Hayır, teşekkürler</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Asistanın en son özelliklerini takip etmenizi sağlayacak e-postalar almak için <b>Evet</b>'i seçin veya
            e-posta almak istemiyorsanız <b>Hayır</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Önerilen uygulamalardan yüklemek istediklerinizi listeden seçip devam etmek için <b>Devam</b>'ı
            seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Android kurulumu tamamlanmıştır. <img src={right} className="inline-icon" alt="Sağ"/> veya <Circle className="inline-icon button"/>
            {" "} düğmesine ardarda basıp cihazınızın özelliklerine göz atın.
          </li>
        </ol>
        <h2>
          Not:
        </h2>
        <ul>
          <li>
            Hızlı kurulum gerçekleştirdiyseniz <b>Diğer Ayarlar</b> bölümünden devam edin.
          </li>
        </ul>
        <h2>
          Manuel Kurulum
        </h2>
        <ol>
          <li>
            <b>Atla'yı</b> seçin.
          </li>
          <li>
           <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
           kablosuz ağınızı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Kablosuz ağ şifresini ekran klavyesinden girip <img src={check} alt="Check" className="inline-icon sm"/> tuşunu
            seçip <Circle className="inline-icon button"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              ..... <b>ağına bağlanıyor</b> mesajı ardından <b>İnternete Başarıyla Bağlandı</b> mesajı görüntülenir. 
            </div>
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Ağ Gizlilik Politikası</b> görüntülenir.
            </div>
          </li>
          <li>
            <b>Kabul Et</b>'i seçin.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              Google hesabı Oturum açma menüsü görüntülenir.
            </div>
          </li>
          <li>
            <b>Oturum Açın</b>'ı seçin.
          </li>
          <li>
            Mail adresinizi ekran klavyesinden girin.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              Devam etmek için ekrandan <img src={right_arrow} alt="Sağ ok" className="inline-icon"/> tuşunu 
              seçip <Circle className="inline-icon button"/> düğmesine basın.
            </div>
          </li>
          <li>
            Hesap şifresini ekran klavyesinden girin.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              Devam etmek için ekrandan <img src={right_arrow} alt="Sağ ok" className="inline-icon"/> tuşunu 
              seçip <Circle className="inline-icon button"/> düğmesine basın.
            </div>
          </li>
          <li>
            Televizyon ve telefonunuzun ekranında görüntülenen yönergeleri izleyin.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              Ayarlar tamamlandıktan sonra <b>Hizmet Şartları</b> görüntülenir.
            </div>
          </li>
          <li>
            <b>Kabul Et</b>'i seçin.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Google Hizmetleri</b> görüntülenir.
            </div>
          </li>
          <li>
            <b>Kabul Et</b>'i seçin.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Google Asistan</b> menüsü görüntülenir.
            </div>
          </li>
          <li>
            <b>Devam</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Kişisel sonuçları almak için <b>Aç</b>'ı veya <b>Hayır, teşekkürler</b>'i 
            seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Asistanın en son özelliklerini takip etmenizi sağlayacak e-postalar almak için <b>Evet</b>'i 
            veya e-posta almak istemiyorsanız <b>Hayır</b>'ı seçip <Circle className="inline-icon button"/> düğmesine
            basın.
          </li>
          <li>
            Önerilen uygulamalardan yüklemek istediklerinizi listeden seçin ardından <b>Devam</b>'ı
            seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Android kurulumu tamamlanmıştır <img src={right} alt="Sağ" className="inline-icon"/> düğmesine basıp
            cihazınızın özelliklerine göz atın.
          </li>
        </ol>
        <h2>
          Diğer Ayarlar
        </h2>
        <ol>
          <li>
            Ülkeyi seçin.
          </li>
          <li>
            Şifre belirlemek için <Circle className="inline-icon button"/> düğmesine baısn.
          </li>
          <li>
            Gelen şifre ekranına <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="0" className="inline-icon xs"/>
            {" "} düğmeleriyle <b>1 2 3 4</b> şifre girip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Gelen doğrulama ekranında <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="0" className="inline-icon xs"/>
            {" "} düğmeleriyle <b>1 2 3 4</b> şifreyi tekrar girin.
          </li>
          <li>
            <b>TV Modu seçin</b> menüsü görüntülenir.
          </li>
          <li>
            <b>Ev</b>'i veya <b>Mağaza</b>'yı seçip <Circle className="inline-icon button"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Ev modu:</b> Ev kullanımında enerji verimliliği sağlamak için optimize edilmiştir..
            </div>
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Mağaza modu:</b> Sabit ayarlarla mağazada demo yapmak için optimize edilmiştir.
            </div>
          </li>
          <li>
            Dahili Chromecast özelliğini açmak için <b>Aç</b>'ı seçip <Circle className="inline-icon button"/> düğmesine 
            basın.
          </li>
        </ol>
        <h2>
          Not:
        </h2>
        <ul>
          <li>
            Dahili Chromecast özelliğini sürekli açık tutmak enerji tüketimini arttırır.
          </li>
        </ul>
        <ol>
          <li>
            Anten tipi seçimini yapın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              Bir sonraki prosedür, seçilen anten tipine göre değişir. Seçtiğiniz anten tipine
              göre <b>Uydu Kanallarını Arama, Kablolu Kanalları Arama</b> veya <b>Karasal Kanalları Arama </b>
              bölümünden devam edin.
            </div>
          </li>
        </ol>
        <h2>
          Uydu Kanallarını Arama
        </h2>
        <ol>
          <li>
            <b>Uydu</b>'yu seçin.
             <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Uydu Anten Tipi</b> menüsü görüntülenir.
              <h2>img gelcek</h2>
            </div>
          </li>
          <li>
            <b>Tek Kablo</b>'yu seçip <Circle className="inline-icon button"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Operatör Seçin</b> menüsü görüntülenir.
            </div>
          </li>
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            Kullandığınız uydu sistemine göre <b>DiSEqC 1.0</b>, <b>DiSEqC 1.1</b>, <b>DiSEqC 1.2</b>, 
            <b> Single Cable I</b>, <b>Single Cable II</b> veya <b>Tone Burust</b>'ı seçin.
            <h2>img gelcek</h2>
          </li>
        </ul>
        <ol>
          <li>
            <b>Standart</b> veya <b>Operatör</b>'ü seçip <Circle className="inline-icon button"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Uydu Seçimi</b> menüsü görüntülenir.
              <h2>img gelcek</h2>
            </div>
          </li>
          <li>
            Listede görüntülenen uyduyu seçip <Circle className="inline-icon button"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Uydu Ayarları</b> menüsü görüntülenir.
              <h2>img gelcek</h2>
            </div>
          </li>
          <li>
            <b>Uydu Durumu</b>'nu <Circle className="inline-icon button"/> düğmesiyle <b>Açık</b> seçin.
          </li>
          <li>
            <b>Uydu Seçimi</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Uydu Seçimi</b> menüsü görüntülenir.
              <h2>img gelcek</h2>
            </div>
          </li>
          <li>
            Tarama yapmak istediğiniz uyduyu listeden seçip <Circle className="inline-icon button"/> düğmesine
            basın.
          </li>
          <li>
            <b>Arama Modu</b>'nu seçip <Circle className="inline-icon button"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Arama Modu</b> menüsü görüntülenir.
              <h2>img gelcek</h2>
            </div>
          </li>
          <li>
            <b>Ağ</b> veya <b>Tam</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Arama Tipi</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Arama Türü</b> menüsü görüntülenir.
              <h2>img gelcek</h2>
            </div>
          </li>
          <li>
            <b>Arama Türü</b>'nü seçin.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              Sadeece şifresiz kanallar için <b>Yalnızca Ücretsiz Kanallar</b>,
            </div>
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              Sadeece şifreli kanallar için <b>Yalnızca Şifrelenmiş Kanallar</b>,
            </div>
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              Tüm uydu kanalları için <b>Tümü</b> seçimini yapın.
            </div>
          </li>
          <li>
            <b>Hafızaya Alma Türü</b>'nü seçin.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Hafızaya Alma Türü</b> menüsü görüntülenir.
              <h2>img gelcek</h2>
            </div>
          </li>
          <li>
            <b>Hafızaya Alma Türü</b>'nü seçin.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              Sadeece televizyon kanalları için <b>Yalnızca Dijital Kanallar</b>,
            </div>
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              Sadeece radyo kanalları için <b>Yalnızca Radyo Kanalları</b>,
            </div>
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              Her ikisini aratmak için <b>Tümü</b> seçimini yapın.
            </div>
          </li>
        </ol>
        <h2>
          Önemli:
        </h2>
        <ul>
          <li>
            Bulunan kanal sayısında belirgin bir eksiklik veya sinyal bulmama gibi bir durumla
            karşılaşırsanız kablo bağlantısından, sinyal seviyesinden, Diseqc A/B/C/D ve LNB 
            seçimlerinin doğru yapıldığından emin olun.
          </li>
        </ul>
        <ol>
          <li>
            Ayarları tamamladıktan sonra önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon"/>
            {" "} düğmesine basın.
          </li>
          <li>
            <b>Sonraki</b>'ni seçin <Circle className="inline-icon button"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Kanal Taraması</b> menüsü görüntülenir.
            </div>
          </li>
          <li>
            <b>Tara</b>'yı seçip <Circle className="inline-icon button"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Tarama</b> menüsü görüntülenir ve televizyon kanallarının aranmasına başlanır.
            </div>
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>SON</b> mesajı göründüğünde arama tamamlanır.
            </div>
          </li>
          <li>
            Kurulumu tamamlayıp çıkmak için <Circle className="inline-icon button"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Akıllı TV Hizmet koşulları</b> görüntülenir.
            </div>
          </li>
          <li>
            <b>Kabul Et</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
        </ol>
        <h2>
          Kablolu Kanalları Arama
        </h2>
        <ol>
          <li>
            <b>Kablolu</b>'yu seçin.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Kanal Taraması</b> menüsü görüntülenir.
              <h2>img gelcek</h2>
            </div>
          </li>
          <li>
            Kanal taramasını başlatmak için seçiminizi yapın ve <Circle className="inline-icon button"/>
            {" "} düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Kablo Taraması Yapılandırma</b> menüsü görüntülenir.
              <h2>img gelcek</h2>
            </div>
          </li>
          <li>
            <b>Arama Modu</b>'nu seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Tam</b>, <b>Gelişmiş</b> veya <b>Hızlı</b> seçimini yapıp  <Circle className="inline-icon button"/>
            {" "} düğmesine basın.
          </li>
          <li>
            Kanal taramasını başlatmak için <img src={right} alt="Sağ" className="inline-icon"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Tarama</b> menüsü görüntülenir ve televizyon kanallarının aranmasına başlanır.
            </div>
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Son</b> mesajı göründüğünde arama tamamlanır.
            </div>
          </li>
          <li>
            Kurulumu tamamlayıp çıkmak için <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Akıllı TV Hizmet koşulları</b> görüntülenir.
          </li>
          <li>
            <b>Kabul Et</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
        </ol>
        <h2>Karasal Kanalları Arama</h2>
        <ol>
          <li>
            <b>Anten</b>'i seçin.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Anten Kurulumu</b> menüsü görüntülenir.
            </div>
          </li>
          <li>
            <b>Arama Türü</b> ve <b>Hafızaya Alma Türü</b>'nü seçin.
          </li>
          <li>
            <b>Sonraki</b> seçeneğini seçip <Circle className="inline-icon button"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Kanal Taraması</b> menüsü görüntülenir.
              <h2>img gelcek</h2>
            </div>
          </li>
          <li>
            Kanal taramasını başlatmak için seçiminizi yapın ve <Circle className="inline-icon button"/> 
            {" "} düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Tarama</b> menüsü görüntülenir ve televizyon kanallarının aranmasına başlanır.
            </div>
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>SON</b> mesajı göründüğünde arama tamamlanır.
            </div>
          </li>
          <li>
            Kurulumu tamamlayıp çıkmak için <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Akıllı TV Hizmet koşulları</b> görüntülenir.
          </li>
          <li>
            <b>Kabul Et</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
        </ol>
      </div>
    </div>
  );
}
