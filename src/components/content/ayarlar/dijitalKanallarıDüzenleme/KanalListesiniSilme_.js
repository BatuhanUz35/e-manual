import { Box } from "@mui/material";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/icons/back.png"
import tv_icon from "../../../../assets/images/icons/tv_icon.png"
import options from "../../../../assets/images/icons/options.png"
import right from "../../../../assets/images/icons/right.png"
import home from "../../../../assets/images/icons/home.png"

export const ol = [
  <Box>
  Tv moduna geçmek için <img src={tv_icon} alt="TV" className="inline-icon"/> düğmesine basın.
</Box>,
<Box>
  <img src={options} alt="Seçenekler" className="inline-icon"/> ardından <img src={right} alt="Sağ" className="inline-icon sm"/> düğmesiyle
  <b> Ayarlar</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
</Box>,
<Box>
  <b>Kanal</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
</Box>,
<Box>
  <b>Kanallar</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
</Box>,
<Box>
  <b>Kanal Listesini Temizle</b>'yi seçip <Circle className="inline-icon button"/> düğmesine basın.
</Box>,
<Box>
  Silme işlemini onaylamak için <b>Tamam</b>'ı veya işlemi iptal etmek için <b>İptal</b>'i
  seçip <Circle className="inline-icon button"/> düğmesine basın.
</Box>,
<Box>
  Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon"/> Home menüsüne
  dönmek için <img src={home} alt="home" className="inline-icon"/> veya
  TV yayınına dönmek için <img src={tv_icon} alt="TV" className="inline-icon"/> düğmesine basın.
</Box>
]