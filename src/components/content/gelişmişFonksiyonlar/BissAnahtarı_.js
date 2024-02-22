import { Box } from "@mui/material"; 
import down from "../../../assets/images/icons/down.png";
import one from "../../../assets/images/icons/one.png"
import zero from "../../../assets/images/icons/zero.png"
import check from "../../../assets/images/icons/check.png";
import { Circle } from "@mui/icons-material";

export const ol = [
  <Box>
    <b>Gelişmiş Seçenekler</b> menüsünden <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/
    <img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle <b>BISS Anahtarı</b>'nı seçip
    {" "}<Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Biss anahtarı eklemek için <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    <b> Frekans</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={one} alt="1" className="inline-icon xs" />...<img src={zero} alt="0" className="inline-icon xs" /> düğmeleriyle
    Biss anahtarını gireceğiniz frekansı girip sanal klavyeden <img src={check} alt="Check" className="inline-icon sm" /> tuşunu
    seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    <b> Sembol Oranı (Ksym/s)</b> seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={one} alt="1" className="inline-icon xs" />...<img src={zero} alt="0" className="inline-icon xs" /> düğmeleriyle
    biss anahtarını gireceğiniz frekansın sembol oranını girip sanal klavyeden <img src={check} alt="Check" className="inline-icon sm" />
    {" "} tuşunu seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    <b> Polarizasyon</b>'u seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    biss anahtarını gireceğiniz frekansın polarizasyonunu seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    <b> Program Kimliği</b>'ni seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={one} alt="1" className="inline-icon xs" />...<img src={zero} alt="0" className="inline-icon xs" /> düğmeleriyle
    biss anahtarını gireceğiniz frekansın program kimliğini girip sanal klavyeden <img src={check} alt="Check" className="inline-icon sm" />
    {" "} tuşunu seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    <b> CW Anahtarı</b>'nı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={one} alt="1" className="inline-icon xs" />...<img src={zero} alt="0" className="inline-icon xs" /> düğmeleriyle
    biss anahtarını girip sanal klavyeden <img src={check} alt="Check" className="inline-icon sm" /> tuşunu seçip
    {" "}<Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    <b> Anahtarı Kaydet</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
]