import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import konum_menüsü from "../../../assets/images/in-page-images/konum_menüsü.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <b>Cihaz Terichleri</b> menüsünden <b>Konum</b>'u seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Konum</b> menüsü görüntülenir.</Box>
    </Box>
    <img src={konum_menüsü} alt="Konum Menüsü"className="in-page-img"/>
  </Box>,
  <Box>
    <b>Konum durumu</b>'nu seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Konum servisini açmak için <b>Konumu tahmin etmek için Kablosuz'u kullan</b>'ı veya konum servislerini kapatmak 
      için <b>Kapalı</b>'yı seçip <Circle className="inline-icon button" /> düğmesine basın.</Box>
    </Box>
  </Box>,
]