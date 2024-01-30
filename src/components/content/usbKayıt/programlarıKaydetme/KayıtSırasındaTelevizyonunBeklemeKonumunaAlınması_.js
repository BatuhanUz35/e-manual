import { Box } from "@mui/material";
import "../../style.css"
import one from "../../../../assets/images/icons/one.png"
import zero from "../../../../assets/images/icons/zero.png"
import direction from "../../../../assets/images/icons/direction.png"
import record from "../../../../assets/images/icons/record.png"
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

export const ol = [
  <Box>
    Kaydı başlatmak için <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="o" className="inline-icon xs"/> veya
    {" "}<img src={direction} alt="Yön tuşu" className="inline-icon"/> düğmesiyle kanalı seçin.
  </Box>,
  <Box>
    Kumanda üzerinde bulunan <img src={record} alt="Kayıt tuşu" className="inline-icon"/> kayıt düğmesine basın.
  </Box>,
  <Box>
    Televizyonu bekleme konumuna almak için <PowerSettingsNewIcon className="inline-icon" /> düğmesine basın.
  </Box>
]
