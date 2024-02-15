import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import down from "../../../../assets/images/icons/down.png";

export const ol = [
  <Box>
    <b>Klavye</b> menüsünden <b>Mevcut klavye</b>'yi seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    klavye seçimini değiştirip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>
]