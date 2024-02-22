import React from "react";
import "../style.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import back from "../../../assets/images/icons/back.png"
import home from "../../../assets/images/icons/home.png"
import left from "../../../assets/images/icons/left.png"
import right from "../../../assets/images/icons/right.png"
import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import { ol_1, ol_2, ol_3, ol_4 } from "./Kurulum_";
import uydu_anten_tipi_menüsü from "../../../assets/images/in-page-images/uydu_anten_tipi_menüsü.png"
import operatör_seçin from "../../../assets/images/in-page-images/operatör_seçin.png"
import uydu_seçimi_menüsü from "../../../assets/images/in-page-images/uydu_seçimi_menüsü.png"
import uydu_ayarları from "../../../assets/images/in-page-images/uydu_ayarları.png"
import uydu_seçimi from "../../../assets/images/in-page-images/uydu_seçimi.png"
import arama_modu from "../../../assets/images/in-page-images/arama_modu.png"
import arama_türü_menüsü from "../../../assets/images/in-page-images/arama_türü_menüsü.png"
import hafızaya_alma_türü_menüsü from "../../../assets/images/in-page-images/hafızaya_alma_türü_menüsü.png"
import kanal_taraması from "../../../assets/images/in-page-images/kanal_taraması.png"
import kanal_taraması_2 from "../../../assets/images/in-page-images/kanal_taraması_2.png"
import kablo_taraması_yapılandırma_menüsü from "../../../assets/images/in-page-images/kablo_taraması_yapılandırma.png"
import anten_kurulumu from "../../../assets/images/in-page-images/anten_kurulumu.png"

export default function Kurulum() {
  return (
    <Box className="page">
      <p>
        Ana Sayfa / Ayarlar / İlk Kurulum ve Televizyonu Ayarlama
      </p>
      <Box className="container">
        <h1>İlk Kurulum ve Televizyonu Ayarlama</h1>
        <ol>
          {ol_1.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Önemli:</h2>
        <ul>
          <li>
            Bluetooth kumandada eşleme sorunu yaşamanız durumunda kumandayı
            sıfırlanamanız gerekir, bunun için; kumandanın{" "}
            <img src={home} className="inline-icon" alt="Home" /> ve{" "}
            <img src={left} className="inline-icon sm" alt="Sol" /> düğmelerine
            aynı anda 5sn. basılı tutun.
          </li>
        </ul>
        <h2>Not:</h2>
        <ul>
          <li>
            Ürünün Kırulumunu hızlı veya manuel yapabilirsiniz
            <ul>
              <li>
                <b>Hızlı Kurulum:</b> Bir Android telefon ile ağ ayarları ve
                hesap ayarlarını kolayca aktarın.
              </li>
              <li>
                <b>Manuel Kurulum:</b> Tüm ayarları manuel olarak girin.
              </li>
            </ul>
          </li>
        </ul>
        <h2>Hızlı Kurulum</h2>
        <ol>
          {ol_2.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            Hızlı kurulum gerçekleştirdiyseniz <b>Diğer Ayarlar</b> bölümünden
            devam edin.
          </li>
        </ul>
        <h2>Manuel Kurulum</h2>
        <ol>
          {ol_3.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Diğer Ayarlar</h2>
        <ol>
          {ol_4.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            Dahili Chromecast özelliğini sürekli açık tutmak enerji tüketimini
            arttırır.
          </li>
        </ul>
        <ol>
          <li>
            Anten tipi seçimini yapın.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                Bir sonraki prosedür, seçilen anten tipine göre değişir.
                Seçtiğiniz anten tipine göre{" "}
                <b>Uydu Kanallarını Arama, Kablolu Kanalları Arama</b> veya{" "}
                <b>Karasal Kanalları Arama </b>
                bölümünden devam edin.
              </Box>
            </Box>
          </li>
        </ol>
        <h2>Uydu Kanallarını Arama</h2>
        <ol>
          <li>
            <b>Uydu</b>'yu seçin.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                <b>Uydu Anten Tipi</b> menüsü görüntülenir.
                <img
                  src={uydu_anten_tipi_menüsü}
                  alt="Uydu Anten Tipi Menüsü"
                />
              </Box>
            </Box>
          </li>
          <li>
            <b>Tek Kablo</b>'yu seçip <Circle className="inline-icon button" />{" "}
            düğmesine basın.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                <b>Operatör Seçin</b> menüsü görüntülenir.
              </Box>
            </Box>
          </li>
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            Kullandığınız uydu sistemine göre <b>DiSEqC 1.0</b>,{" "}
            <b>DiSEqC 1.1</b>, <b>DiSEqC 1.2</b>,<b> Single Cable I</b>,{" "}
            <b>Single Cable II</b> veya <b>Tone Burust</b>'ı seçin.
            <img
              src={operatör_seçin}
              alt="Operatör Seçin"
              className="in-page-img"
            />
          </li>
        </ul>
        <ol>
          <li>
            <b>Standart</b> veya <b>Operatör</b>'ü seçip{" "}
            <Circle className="inline-icon button" /> düğmesine basın.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                <b>Uydu Seçimi</b> menüsü görüntülenir.
                <img src={uydu_seçimi_menüsü} alt="Uydu Seçimi Menüsü" />
              </Box>
            </Box>
          </li>
          <li>
            Listede görüntülenen uyduyu seçip{" "}
            <Circle className="inline-icon button" /> düğmesine basın.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                <b>Uydu Ayarları</b> menüsü görüntülenir.
                <img src={uydu_ayarları} alt="Uydu Ayarları" />
              </Box>
            </Box>
          </li>
          <li>
            <b>Uydu Durumu</b>'nu <Circle className="inline-icon button" />{" "}
            düğmesiyle <b>Açık</b> seçin.
          </li>
          <li>
            <b>Uydu Seçimi</b>'ni seçip{" "}
            <Circle className="inline-icon button" /> düğmesine basın.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                <b>Uydu Seçimi</b> menüsü görüntülenir.
                <img src={uydu_seçimi} alt="Uydu Seçimi menüsü" />
              </Box>
            </Box>
          </li>
          <li>
            Tarama yapmak istediğiniz uyduyu listeden seçip{" "}
            <Circle className="inline-icon button" /> düğmesine basın.
          </li>
          <li>
            <b>Arama Modu</b>'nu seçip <Circle className="inline-icon button" />{" "}
            düğmesine basın.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
              <b>Arama Modu</b> menüsü görüntülenir.
                <img src={arama_modu} alt="Arama Modu Menüsü" />
              </Box>
            </Box>
          </li>
          <li>
            <b>Ağ</b> veya <b>Tam</b>'ı seçip{" "}
            <Circle className="inline-icon button" /> düğmesine basın.
          </li>
          <li>
            <b>Arama Tipi</b>'ni seçip <Circle className="inline-icon button" />{" "}
            düğmesine basın.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                <b>Arama Türü</b> menüsü görüntülenir.
                <img src={arama_türü_menüsü} alt="Arama Türü Menüsü" />
              </Box>
            </Box>
          </li>
          <li>
            <b>Arama Türü</b>'nü seçin.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                Sadece şifresiz kanallar için <b>Yalnızca Ücretsiz Kanallar</b>,
              </Box>
            </Box>
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                Sadece şifreli kanallar için <b>Yalnızca Şifrelenmiş Kanallar</b>,
              </Box>
            </Box>
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                Tüm uydu kanalları için <b>Tümü</b> seçimini yapın.
              </Box>
            </Box>
          </li>
          <li>
            <b>Hafızaya Alma Türü</b>'nü seçin.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                <b>Hafızaya Alma Türü</b> menüsü görüntülenir.
                <img src={hafızaya_alma_türü_menüsü} alt="Hafızaya Alma Türü Menüsü" />
              </Box>
            </Box>
          </li>
          <li>
            <b>Hafızaya Alma Türü</b>'nü seçin.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                Sadece televizyon kanalları için <b>Yalnızca Dijital Kanallar</b>,
              </Box>
            </Box>
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                Sadece radyo kanalları için <b>Yalnızca Radyo Kanalları</b>,
              </Box>
            </Box>
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                Her ikisini aratmak için <b>Tümü</b> seçimini yapın.
              </Box>
            </Box>
          </li>
        </ol>
        <h2>Önemli:</h2>
        <ul>
          <li>
            Bulunan kanal sayısında belirgin bir eksiklik veya sinyal bulmama
            gibi bir durumla karşılaşırsanız kablo bağlantısından, sinyal
            seviyesinden, Diseqc A/B/C/D ve LNB seçimlerinin doğru yapıldığından
            emin olun.
          </li>
        </ul>
        <ol>
          <li>
            Ayarları tamamladıktan sonra önceki menüye dönmek için{" "}
            <img src={back} alt="geri" className="inline-icon" /> düğmesine
            basın.
          </li>
          <li>
            <b>Sonraki</b>'ni seçin <Circle className="inline-icon button" />{" "}
            düğmesine basın.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                <b>Kanal Taraması</b> menüsü görüntülenir.
                <img src={kanal_taraması} alt="Kanal Taraması Menüsü" /> 
              </Box>
            </Box>
          </li>
          <li>
            <b>Tara</b>'yı seçip <Circle className="inline-icon button" />{" "}
            düğmesine basın.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                <b>Tarama</b> menüsü görüntülenir ve televizyon kanallarının
                aranmasına başlanır.
              </Box>
            </Box>
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                <b>SON</b> mesajı göründüğünde arama tamamlanır.
              </Box>
            </Box>
          </li>
          <li>
            Kurulumu tamamlayıp çıkmak için{" "}
            <Circle className="inline-icon button" /> düğmesine basın.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                <b>Akıllı TV Hizmet koşulları</b> görüntülenir.
              </Box>
            </Box>
          </li>
          <li>
            <b>Kabul Et</b>'i seçip <Circle className="inline-icon button" />{" "}
            düğmesine basın.
          </li>
        </ol>
        <h2>Kablolu Kanalları Arama</h2>
        <ol>
          <li>
            <b>Kablolu</b>'yu seçin.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                <b>Kanal Taraması</b> menüsü görüntülenir.
                <img src={kanal_taraması_2} alt="Kanal Taraması Menüsü" /> 
              </Box>
            </Box>
          </li>
          <li>
            Kanal taramasını başlatmak için seçiminizi yapın ve{" "}
            <Circle className="inline-icon button" /> düğmesine basın.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                <b>Kablo Taraması Yapılandırma</b> menüsü görüntülenir.
                <img src={kablo_taraması_yapılandırma_menüsü} alt="Kablo Taraması Yapılandırma Menüsü" /> 
              </Box>
            </Box>
          </li>
          <li>
            <b>Arama Modu</b>'nu seçip <Circle className="inline-icon button" />{" "}
            düğmesine basın.
          </li>
          <li>
            <b>Tam</b>, <b>Gelişmiş</b> veya <b>Hızlı</b> seçimini yapıp{" "}
            <Circle className="inline-icon button" /> düğmesine basın.
          </li>
          <li>
            Kanal taramasını başlatmak için{" "}
            <img src={right} alt="Sağ" className="inline-icon sm" /> düğmesine
            basın.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                <b>Tarama</b> menüsü görüntülenir ve televizyon kanallarının
                aranmasına başlanır.
              </Box>
            </Box>
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                <b>Son</b> mesajı göründüğünde arama tamamlanır.
              </Box>
            </Box>
          </li>
          <li>
            Kurulumu tamamlayıp çıkmak için{" "}
            <Circle className="inline-icon button" /> düğmesine basın.
          </li>
          <li>
            <b>Akıllı TV Hizmet koşulları</b> görüntülenir.
          </li>
          <li>
            <b>Kabul Et</b>'i seçip <Circle className="inline-icon button" />{" "}
            düğmesine basın.
          </li>
        </ol>
        <h2>Karasal Kanalları Arama</h2>
        <ol>
          <li>
            <b>Anten</b>'i seçin.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                <b>Anten Kurulumu</b> menüsü görüntülenir.
                <img src={anten_kurulumu} alt="Anten Kurulumu" /> 
              </Box>
            </Box>
          </li>
          <li>
            <b>Arama Türü</b> ve <b>Hafızaya Alma Türü</b>'nü seçin.
          </li>
          <li>
            <b>Sonraki</b> seçeneğini seçip{" "}
            <Circle className="inline-icon button" /> düğmesine basın.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                <b>Kanal Taraması</b> menüsü görüntülenir.
                <img src={kanal_taraması_2} alt="Kanal Taraması Menüsü" /> 
              </Box>
            </Box>
          </li>
          <li>
            Kanal taramasını başlatmak için seçiminizi yapın ve{" "}
            <Circle className="inline-icon button" /> düğmesine basın.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                <b>Tarama</b> menüsü görüntülenir ve televizyon kanallarının
                aranmasına başlanır.
              </Box>
            </Box>
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs start" />
              <Box>
                <b>SON</b> mesajı göründüğünde arama tamamlanır.
              </Box>
            </Box>
          </li>
          <li>
            Kurulumu tamamlayıp çıkmak için{" "}
            <Circle className="inline-icon button" /> düğmesine basın.
          </li>
          <li>
            <b>Akıllı TV Hizmet koşulları</b> görüntülenir.
          </li>
          <li>
            <b>Kabul Et</b>'i seçip <Circle className="inline-icon button" />{" "}
            düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}
