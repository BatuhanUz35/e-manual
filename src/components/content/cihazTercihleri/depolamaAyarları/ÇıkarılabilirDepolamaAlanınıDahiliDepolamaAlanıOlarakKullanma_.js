import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import home from "../../../../assets/images/icons/home.png";
import back from "../../../../assets/images/icons/back.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol1 = [
  <Box>
    <b>Depolama</b> menüsünden <b>Çıkarılabilir depolama alanı</b> altından harici veri ortamını seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Sil ve depolama alanı olarak biçimlendir‘i seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Harici veri ortamını biçimlendirmek için <b>Biçimlendir</b>'i veya biçimlendirmeyi iptal etmek için <b>İptal</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
]

export const önemli = [
  <Box>
    Bu işlem harici veri ortamındaki tüm veriyi silecektir.
  </Box>,
  <Box>
    Biçimlendirme sonrası harici veri ortamı sadece bu cihazda kullanılabilir.
  </Box>
]

export const ol2 = [
  <Box>
    Biçimlendirme tamamlandıktan sonra tüm verileri harici veri ortamına taşımak için <b>Şimdi Taşı</b>‘yı
    seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Verileriniz harici veri ortamına taşınır.</Box>
    </Box>
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home menüsüne
    dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>
]