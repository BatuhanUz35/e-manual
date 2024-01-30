import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import one from "../../../assets/images/icons/one.png";
import zero from "../../../assets/images/icons/zero.png";
import left from "../../../assets/images/icons/left.png"
import right from "../../../assets/images/icons/right.png"
import down from "../../../assets/images/icons/down.png";
import back from "../../../assets/images/icons/back.png";
import { Box } from "@mui/material";

export const texts = [
  "HbbTV'yi destekleyen bir TV programına geçiş yaptığınızda, HbbTV yayın mevcut ise " +
  "bir bilgi mesajı görüntülenir.",
]

export const not_1 = {
  ul: ["HBBTV'nin aktif olması için HBBTV Ayarlarından HBBTV Desteğinin etkinleştirilmiş olması " +
    "gerekmektedir."],
  ol: [
  <Box>
    <Circle className="inline-icon button-red button" /> (kırmızı) düğmesi ile HbbTV'yi açın.
    <Box>
      <ArrowForwardIcon className="inline-icon xs" />
      Hizmet hakkindaki bilgiler ekranda görüntülenir. Buna ek olarak, menülerde gezinme için gerekli olan renkli
      düğmeler de görüntülenir.
    </Box>
  </Box>
  ]
}

export const notlar = {
  ul: ["Konu alan aralığı ve bireysel konu alanlarının seçimi her bir programın kendi sağlayıcısına bağlıdır.",
  <Box>
    <img src={one} alt="1" className="inline-icon xs"/> ila <img src={zero} alt="0" className="inline-icon xs"/>
    arasındaki rakam düğmeleri ek fonksiyonlar için kullanılır.
  </Box>],
  ol: [
    <Box>
      İstenen konu alanını <Circle className="inline-icon button-green button" /> (yeşil), <Circle className="inline-icon button-yellow button" />
      {" "}(sarı) veya <Circle className="inline-icon button-blue button" /> (mavi) düğmeleriyle seçin.
    </Box>,
    <Box>
      Seçtiğiniz konu alanında, <img src={left} alt="sol" className="inline-icon sm"/>/<img src={right} alt="sağ" className="inline-icon sm"/>/
      <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmelerini
      kullanarak istediğiniz seçeneği seçin ve <Circle className="inline-icon button" /> düğmesiyle onaylayın.
    </Box>,
    <Box>
      <Circle className="inline-icon button-red button" /> (kırmızı) düğmesi ile HbbTV'yi kapatın.
    </Box>
  ]
}

export const not_2 = {
  ul: [
    <Box>
      HbbTV modunda navigasyon çalışmazsa <img src={back} alt="geri" className="inline-icon"/> düğmesine basarak
      fonksiyondan çıkabilirsiniz.
    </Box>,
  ]
}