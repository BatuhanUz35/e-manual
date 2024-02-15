import { Box } from "@mui/material"
import home from "../../../assets/images/icons/home.png"
import left from "../../../assets/images/icons/left.png"
import right from "../../../assets/images/icons/right.png"
import down from "../../../assets/images/icons/down.png"
import settings from "../../../assets/images/icons/settings.png"
import { Circle } from "@mui/icons-material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const texts = [
  <Box>
    Çocuklar için uygun olmayan içeriklere veya sahnelere sahip filmler vardır.
  </Box>,
  <Box>
    Bazı programlar, bu içerikleri ve sahneleri tanımlayan bilgiler içermekte olup bunlar için 4 ila 18 arasında bir erişim düzeyi tanımlanmıştır. 
    Bu erişim düzeylerinden birini seçerek yayının gösterilmesini onaylayabilirsiniz.
  </Box>
]

export const ol = [
  <Box>
    <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={left} alt="Sol" className="inline-icon sm" />/<img src={right} alt="Sağ" className="inline-icon sm" />
    /<img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    <img src={settings} alt="Ayarları" className="inline-icon" /> Ayarları seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Kanal</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Kanal</b> menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Ebeveyn Denetimleri</b>'ni seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>PIN kodunuzu girin</b> mesajı görüntülenir.</Box>
    </Box>
  </Box>
]

export const links = [
  {
    title: "Bir Televizyon Kanalını Engelleme",
    url:  "/ebeveyn-ayarları/bir-televizyon-kanalını-engelleme",
    focus_item: 160100,
  },
  {
    title: "Engellenmiş Bir Televizyon Kanalını İzleme",
    url:  "/ebeveyn-ayarları/engellenmiş-bir-televizyon-kanalını-izleme",
    focus_item: 160200,
  },
  {
    title: "Program Kısıtlamaları",
    url:  "/ebeveyn-ayarları/program-kısıtlamları",
    focus_item: 160300,
  },
  {
    title: "Bir Harici Kaynağı Engelleme",
    url:  "/ebeveyn-ayarları/bir-harici-kaynağı-engelleme",
    focus_item: 160400,
  },
  {
    title: "Engellenmiş Bir Harici Kaynağı İzleme",
    url:  "/ebeveyn-ayarları/engellenmiş-bir-harici-kaynağı-izleme",
    focus_item: 160500,
  },
  {
    title: "PIN Kodunu Değiştirme",
    url:  "/ebeveyn-ayarları/pin-kodunu-değiştirme",
    focus_item: 160600,
  },
]