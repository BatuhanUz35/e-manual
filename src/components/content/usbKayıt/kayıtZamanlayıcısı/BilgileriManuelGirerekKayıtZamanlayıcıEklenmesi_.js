import { Box } from "@mui/material";
import "../../style.css"
import down from "../../../../assets/images/icons/down.png"
import right from "../../../../assets/images/icons/right.png"
import left from "../../../../assets/images/icons/left.png"
import tv_icon from "../../../../assets/images/icons/tv_icon.png";
import options from "../../../../assets/images/icons/options.png";
import zero from "../../../../assets/images/icons/zero.png";
import one from "../../../../assets/images/icons/one.png";
import { Circle } from "@mui/icons-material";

export const ol1 = [
  <Box>
    TV moduna geçmek için <img src={tv_icon} alt="TV" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={options} alt="Seçenekler" className="inline-icon" /> ardından <img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle <b>Kaydet</b> sekmesini seçin.
  </Box>,
  <Box>
    <img src={right} alt="Sağ" className="inline-icon sm" /> düğmesiyle <b>Program Listesi</b>'ni seçip <Circle className="inline-icon button" /> düğmesiyle <b>Ekle</b> öğesini
    seçip <Circle className="inline-icon button" /> düğmesiyle onaylayın.
  </Box>,
  <Box>
    <b>Bilgi</b> menüsü görüntülenir. <img src={right} alt="Sağ" className="inline-icon sm" />
  </Box>
]

export const not = [
  <Box>
    Daha önceden programlanmış bir zamanlayıcı varsa <b>Bilgi</b> menüsü görüntülenmeden, <b>Program Listesi</b> menüsü görüntülenir.
    Bu durumda zamanlayıcı eklemek için <Circle className="inline-icon button-yellow button" /> (sarı) düğmesine basın.
  </Box>
]

export const ol2 = [
  <Box>
    <b>Kanal Bilgisi</b>'ni seçip <Circle className="inline-icon button" /> düğmesine basın. <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    kaydedeceğiniz kanalı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Başlangıç Tarihi</b>'ni seçip <Circle className="inline-icon button" /> düğmesine basın. <img src={one} alt="1" className="inline-icon xs" />...<img src={zero} alt="0" className="inline-icon xs" /> düğmesiyle yıl, ay ve gün
    bilgisini girip <Circle className="inline-icon button-green button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Başlangıç Zamanı</b>'nı seçip <Circle className="inline-icon button" /> düğmesine basın. <img src={one} alt="1" className="inline-icon xs" />...<img src={zero} alt="0" className="inline-icon xs" /> düğmesiyle saat, dakika ve saniye
    bilgisini girip <Circle className="inline-icon button-green button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Durdurma Zamanı</b>'nı seçip <Circle className="inline-icon button" /> düğmesine basın. <img src={one} alt="1" className="inline-icon xs" />...<img src={zero} alt="0" className="inline-icon xs" /> düğmesiyle saat, dakika ve saniye
    bilgisini girip <Circle className="inline-icon button-green button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Program Türü</b>'nü seçip <Circle className="inline-icon button" /> düğmesine basın. <Circle className="inline-icon button" /> düğmesine basın. <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/
    <img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle <b>Kaydet</b> seçimini yapıp <Circle className="inline-icon button-green button" /> (yeşil) düğmesine basın.
  </Box>,
  <Box>
    <b>Tekrarlanma Türü</b>'nü seçip <Circle className="inline-icon button" /> düğmesine basın. <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle 
    (<b>Bir Defa, Her Gün</b> veya <b>Hafta</b>) seçimini yapıp <Circle className="inline-icon button-green button" /> (yeşil) düğmesine basın.
  </Box>,
  <Box>
    <b>Etkinlik Modeli</b>'ni <img src={left} alt="Sol" className="inline-icon sm" />/<img src={right} alt="Sağ" className="inline-icon sm" /> düğmesiyle <b>Zamanlama Programı</b> seçip <Circle className="inline-icon button-green button" /> (yeşil) düğmesine basın.
  </Box>,
  <Box>
    Zamanlayıcıyı kaydetmek <Circle className="inline-icon button-green button" /> (yeşil) düğmesine basın.
  </Box>,
  <Box>
    Yayına dönmek için <img src={tv_icon} alt="TV" className="inline-icon"/> düğmesine basın.
  </Box>
]
