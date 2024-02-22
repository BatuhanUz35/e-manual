import { Box } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import back from "../../../assets/images/icons/back.png"
import home from "../../../assets/images/icons/home.png"
import left from "../../../assets/images/icons/left.png"
import right from "../../../assets/images/icons/right.png"
import down from "../../../assets/images/icons/down.png";
import check from "../../../assets/images/icons/check.png";
import right_arrow from "../../../assets/images/icons/right_arrow.png";
import one from "../../../assets/images/icons/one.png";
import zero from "../../../assets/images/icons/zero.png";
import { Circle } from "@mui/icons-material";
import hoş_geldiniz_menüsü from "../.././../assets/images/in-page-images/hoş_geldiniz_menüsü.png"

export const ol_1 = [
  <Box>Anten ve harici cihaz kablolarını bağlayın.</Box>,
  <Box>Elektrik fişini prize takın.</Box>,
  <Box>
    Televizyonu, uzaktan kumandadaki
    <PowerSettingsNewIcon className="inline-icon" /> düğmesiyle açın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>Bir süre sonra ekranda <b>Hoş geldiniz</b> menüsü görüntülenir</Box>
    </Box>
    <img src={hoş_geldiniz_menüsü} alt="Hoş Geldiniz Menüsü" />
  </Box>,
  <Box>
    Dil seçimini yapın.
  </Box>,
  <Box>
    Aksesuarlar menüsü görüntülenir. Bir Bluetooth aksesuar eşleştirmek istemiyorsanız
    {" "}<img src={back} className="inline-icon" alt="Geri" /> düğmesine basın.
  </Box>,
  <Box>
    Bluetooth kumandayı eşleştirmek için {" "}<img src={home} className="inline-icon" alt="Home" />
    ve {" "}<img src={left} className="inline-icon sm" alt="Sol" /> düğmelerine aynı anda 5sn basılı tutun.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>Kumanda üzerinde beyaz led yanıp sönmeye başlar</Box>
    </Box>
  </Box>,
  <Box>
    Bulunan Bluetooth cihazlar görüntülenir. <b>Android TV Remote Control'u</b> seçip
    <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>Kumanda ile televizyon eşleştirme işlemi tamamlanır.</Box>
    </Box>
  </Box>,
]

export const ol_2 = [
  <Box>
    <b>Devam</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Televizyon ve telefonunuzun ekranında görüntülenen yönergeleri izleyin.
  </Box>,
  <Box>
    <b>Ağ Gizlilik Politikası</b> görüntülenir.
  </Box>,
  <Box>
    <b>Kabul Et</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box><b>Hizmet Şartları</b> görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Kabul Et</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box><b>Google Hizmetleri</b> görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Kabul Et</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box> <b>Google Asistan</b> menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Devam</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Kişisel sonuçları almak için <b>Aç</b>'ı seçip <Circle className="inline-icon button" /> düğmesine
    basın veya <b>Hayır, teşekkürler</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Asistanın en son özelliklerini takip etmenizi sağlayacak e-postalar almak için <b>Evet</b>'i seçin veya
    e-posta almak istemiyorsanız <b>Hayır</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Önerilen uygulamalardan yüklemek istediklerinizi listeden seçip devam etmek için <b>Devam</b>'ı
    seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Android kurulumu tamamlanmıştır. <img src={right} className="inline-icon sm" alt="Sağ" /> veya <Circle className="inline-icon button" />
    {" "} düğmesine ardarda basıp cihazınızın özelliklerine göz atın.
  </Box>,
]

export const ol_3 = [
  <Box>
    <b>Atla'yı</b> seçin.
  </Box>,
  <Box>
    <img src={down} alt="yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="aşağı" className="inline-icon sm" /> düğmesiyle
    kablosuz ağınızı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Kablosuz ağ şifresini ekran klavyesinden girip <img src={check} alt="Check" className="inline-icon sm" /> tuşunu
    seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>..... <b>ağına bağlanıyor</b> mesajı ardından <b>İnternete Başarıyla Bağlandı</b> mesajı görüntülenir.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box><b>Ağ Gizlilik Politikası</b> görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Kabul Et</b>'i seçin.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>Google hesabı Oturum açma menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Oturum Açın</b>'ı seçin.
  </Box>,
  <Box>
    Mail adresinizi ekran klavyesinden girin.
    <Box>
      <Box className="flex-container padding-1">
        <ArrowForwardIcon className="inline-icon xs start" /><Box><b>Ağ Gizlilik Politikası</b> görüntülenir.</Box>
      </Box>
      <Box className="flex-container padding-1">
        <ArrowForwardIcon className="inline-icon xs start" /><Box>
          Devam etmek için ekrandan <img src={right_arrow} alt="Sağ ok" className="inline-icon xs" /> tuşunu
          seçip <Circle className="inline-icon button" /> düğmesine basın.
        </Box>
      </Box>
    </Box>
  </Box>,
  <Box>
    Hesap şifresini ekran klavyesinden girin.
    <Box>
      <Box className="flex-container padding-1">
        <ArrowForwardIcon className="inline-icon xs start" /><Box>
          Devam etmek için ekrandan <img src={right_arrow} alt="Sağ ok" className="inline-icon xs" /> tuşunu
          seçip <Circle className="inline-icon button" /> düğmesine basın.
        </Box>
      </Box>
    </Box>
  </Box>,
  <Box>
    Televizyon ve telefonunuzun ekranında görüntülenen yönergeleri izleyin.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>
        Ayarlar tamamlandıktan sonra <b>Hizmet Şartları</b> görüntülenir.
      </Box>
    </Box>
  </Box>,
  <Box>
    <b>Kabul Et</b>'i seçin.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>
      <b>Google Hizmetleri</b> görüntülenir.
      </Box>
    </Box>
  </Box>,
  <Box>
    <b>Kabul Et</b>'i seçin.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>
        <b>Google Asistan</b> menüsü görüntülenir.
      </Box>
    </Box>
  </Box>,
  <Box>
    <b>Devam</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Kişisel sonuçları almak için <b>Aç</b>'ı veya <b>Hayır, teşekkürler</b>'i
    seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Asistanın en son özelliklerini takip etmenizi sağlayacak e-postalar almak için <b>Evet</b>'i
    veya e-posta almak istemiyorsanız <b>Hayır</b>'ı seçip <Circle className="inline-icon button" /> düğmesine
    basın.
  </Box>,
  <Box>
    Önerilen uygulamalardan yüklemek istediklerinizi listeden seçin ardından <b>Devam</b>'ı
    seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Android kurulumu tamamlanmıştır <img src={right} alt="Sağ" className="inline-icon sm" /> düğmesine basıp
    cihazınızın özelliklerine göz atın.
  </Box>
]

export const ol_4 = [
  <Box>
    Ülkeyi seçin.
  </Box>,
  <Box>
    Şifre belirlemek için <Circle className="inline-icon button" /> düğmesine baısn.
  </Box>,
  <Box>
    Gelen şifre ekranına <img src={one} alt="1" className="inline-icon xs" />...<img src={zero} alt="0" className="inline-icon xs" />
    {" "} düğmeleriyle <b>1 2 3 4</b> şifre girip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Gelen doğrulama ekranında <img src={one} alt="1" className="inline-icon xs" />...<img src={zero} alt="0" className="inline-icon xs" />
    {" "} düğmeleriyle <b>1 2 3 4</b> şifreyi tekrar girin.
  </Box>,
  <Box>
    <b>TV Modu seçin</b> menüsü görüntülenir.
  </Box>,
  <Box>
    <b>Ev</b>'i veya <b>Mağaza</b>'yı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>
      <b>Ev modu:</b> Ev kullanımında enerji verimliliği sağlamak için optimize edilmiştir.
      </Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>
      <b>Mağaza modu:</b> Sabit ayarlarla mağazada demo yapmak için optimize edilmiştir.
      </Box>
    </Box>
  </Box>,
  <Box>
    Dahili Chromecast özelliğini açmak için <b>Aç</b>'ı seçip <Circle className="inline-icon button" /> düğmesine
    basın.
  </Box>
]