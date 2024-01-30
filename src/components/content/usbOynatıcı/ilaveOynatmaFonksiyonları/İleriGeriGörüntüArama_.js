import { Box } from "@mui/material";
import fast_backward from "../../../../assets/images/icons/fast_backward.png";
import fast_forward from "../../../../assets/images/icons/fast_forward.png";

export const texts = [
  <Box>(yalnızca video ve ses dosyaları)</Box>,
  <Box>Farklı hızları seçebilirsiniz (ileriye ya da geriye doğru 2 kat, 4 kat, 8 kat, 16 kat ve 32 kat hızlı).</Box>
]

export const ol = [
  <Box>
    Oynatma esnasında istenilen süreye gitmek için <img src={fast_backward} alt="Geri sar" className="inline-icon"/> veya <img src={fast_forward} alt="İleri sar" className="inline-icon"/>  düğmelerine basın.

  </Box>,
]