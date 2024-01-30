import { Box } from "@mui/material";
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png"


export const ol = [
  <Box>
    <b>Hakkında</b> menüsünden <b>Model, Sürüm, Yazılım Sürümü, Netflix ESN, Android güvenlik yaması düzeyi, Çekirdek sürümü</b> ve <b>Yapı</b> bilgilerini görüntüleyin.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>
]