import { Box } from "@mui/material";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/icons/back.png"

export const notlar = [
  <Box>
    Tüm kaynaklar için (uydu, kablo ve anten) favori listeleri ayrı ayrı oluşturulmalıdır.
  </Box>,
  <Box>
    Favori kanallarınızı 4 ayrı liste halinde kaydedebilirsiniz.
  </Box>,
  <Box>
    Kanallar favori listesine eklenmeden önce eklenecek favori listesi seçilmelidir.
  </Box>
]

export const ol = [
  <Box>
    <b>Kanal Düzenleyici</b> menüsünde favori listesine eklemek istediğniz kanal/kanlları
    seçip <Circle className="inline-icon button" /> düğmesiyle işaretleyin.
  </Box>,
  <Box>
    Favori listesini seçmek için <Circle className="inline-icon red button" /> (kırmızı) düğmesine basın.
  </Box>,
  <Box>
    Kanallar ekleyeceğiniz favori listesini <Circle className="inline-icon button-red button" /> (kırmızı), <Circle className="inline-icon button-green button" /> (yeşil),
    <Circle className="inline-icon button-yellow button" /> (sarı) veya <Circle className="inline-icon button-blue button" /> (mavi) düğmeleriyle seçin (FAV 1 ila FAV 4).
  </Box>,
  <Box>
    <b>
      Kanal Düzenleyici</b> menüsünden çıkmak için {" "}<img src={back} alt="Geri" className="inline-icon" /> ardından <b>Evet</b>'i
    seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>
]