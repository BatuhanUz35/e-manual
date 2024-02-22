import { Box } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Circle } from "@mui/icons-material";

export const ol = [
  <Box>
    Chiazı bekleme konumuna almak için <PowerSettingsNewIcon className="inline-icon" />
    düğmesine 5 sn basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Kapat menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Tamam seçeneğini seçip <Circle className="inline-icon button" /> düğmesiyle onaylayın.
  </Box>,
  <Box>
    Televizyon bekleme konumuna geçer.
  </Box>
]