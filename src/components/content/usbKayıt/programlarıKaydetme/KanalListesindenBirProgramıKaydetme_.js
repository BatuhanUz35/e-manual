import { Box } from "@mui/material";
import "../../style.css"
import record from "../../../../assets/images/icons/record.png"
import down from "../../../../assets/images/icons/down.png"
import stop from "../../../../assets/images/icons/stop.png"
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <Circle className="inline-icon button" /> düğmesine basarak kanal listesini açın.
  </Box>,
  <Box>
    <img src={down} alt="yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="aşağı" className="inline-icon sm" /> düğmesiyle bir
    kanal seçin ve <Circle className="inline-icon button" /> düğmesiyle onaylayın.
  </Box>,
  <Box>
    Kumanda üzerinde bulunan <img src={record} alt="Kayıt" className="inline-icon" /> kayıt düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Kayıt bilgisi görüntülenir: Kayıt sembolü, kanal adı, program ve kayıt süresi.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Bu bilgiler kısa süre sonra kaybolur ekranın sol alt köşesinde <b>REC</b> sembolü ve kayıt süresi görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Kaydı durdurmak için <img src={stop} alt="Durdur" className="inline-icon" /> düğmesine basın.
  </Box>
]
