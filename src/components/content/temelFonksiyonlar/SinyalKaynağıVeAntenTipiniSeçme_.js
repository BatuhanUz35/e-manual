import { Box } from "@mui/material";
import options from "../../../assets/images/icons/options.png"
import entries from "../../../assets/images/icons/entries.png"
import { Circle } from "@mui/icons-material";

export const ol = [
  <Box>
    <img src={entries} alt="Girişler" className="inline-icon" /> düğmesine basın ve sinyal kaynağını veya
    anten tipini seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    TV modunda <img src={options} alt="Seçenekler" className="inline-icon" /> düğmesine basın, <b>Kaynak</b>
    {" "} seçeneğine <Circle className="inline-icon button" /> düğmesiyle onaylayıp sinyal kaynağını veya
    anten tipini seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Home</b> menüsünden <img src={entries} alt="Girişler" className="inline-icon" /> <b>Girişler</b>'i seçip
    {" "}<Circle className="inline-icon button" /> düğmesine basın. Sinyal kaynağını veya anten tipini seçip
    {" "}<Circle className="inline-icon button" /> düğmesine basın
  </Box>
]