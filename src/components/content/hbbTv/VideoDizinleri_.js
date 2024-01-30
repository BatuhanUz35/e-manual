import start from "../../../assets/images/icons/start.png";
import fast_backward from "../../../assets/images/icons/fast_backward.png";
import fast_forward from "../../../assets/images/icons/fast_forward.png";
import { Box } from "@mui/material";

export const ol = [
  <Box>
    Oynatmaya başlamak için <img src={start} alt="Başla/Duraklat" className="inline-icon" /> düğmesine basın.
  </Box>,
    <Box>
    <img src={start} alt="Başla/Duraklat" className="inline-icon" /> ile oynatma işlemini duraklatın.
  </Box>,
  <Box>
    <img src={start} alt="Başla/Duraklat" className="inline-icon" /> ile oynatma işlemine devam edin.
  </Box>,
  <Box>
    <img src={fast_backward} alt="Geri sar" className="inline-icon" /> ile geri, <img src={fast_forward} alt="İleri sar" className="inline-icon" />
    {" "} düğmesiyle ise ileri sarın.
  </Box>,
  <Box>
    <img src={start} alt="Başla/Duraklat" className="inline-icon" /> düğmesine 5 saniye basıp oynatma işlemini durdurun.
  </Box>
]