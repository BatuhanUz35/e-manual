import { Box } from "@mui/material";
import home from "../../../../assets/images/icons/home.png"
import settings from "../../../../assets/images/icons/settings.png"
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ses_menüsü from "../../../../assets/images/in-page-images/ses_menüsü.png"

export const ol = [
  <Box>
    <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={settings} alt="Ayarlar" className="inline-icon" />'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Cihaz Tercihleri</b>'ni seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Ses</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>
        <b>Ses</b> menüsü görüntülenir.
        <img src={ses_menüsü} alt="Ses Menüsü" />
      </Box>
    </Box>
  </Box>
]

export const links = [
  {
    title: "Sistem Sesleri",
    url: "/ayarlar/ses-ayarları/sistem-sesleri",
    focus_item: 50501
  },
  {
    title: "Balans",
    url: "/ayarlar/ses-ayarları/balans",
    focus_item: 50502
  },
  {
    title: "Bas",
    url: "/ayarlar/ses-ayarları/bas",
    focus_item: 50503
  },
  {
    title: "Tiz",
    url: "/ayarlar/ses-ayarları/tiz",
    focus_item: 50504
  },
  {
    title: "Surround Ses",
    url: "/ayarlar/ses-ayarları/surround-ses",
    focus_item: 50505
  },
  {
    title: "Ekolayzer",
    url: "/ayarlar/ses-ayarları/ekolayzer",
    focus_item: 50506
  },
  {
    title: "Hoparlör Gecikmesi",
    url: "/ayarlar/ses-ayarları/hoparlör-gecikmesi",
    focus_item: 50507
  },
  {
    title: "eARC",
    url: "/ayarlar/ses-ayarları/earc",
    focus_item: 50508
  },
  {
    title: "Dijital Giriş",
    url: "/ayarlar/ses-ayarları/dijital-giriş",
    focus_item: 50509
  },
  {
    title: "Dijital Çıkış",
    url: "/ayarlar/ses-ayarları/dijital-çıkış",
    focus_item: 50510
  },
  {
    title: "SPDIF Gecikmesi",
    url: "/ayarlar/ses-ayarları/spdif-gecikmesi",
    focus_item: 50511
  },
  {
    title: "Dijital Çıkış Gecikmesi",
    url: "/ayarlar/ses-ayarları/dijital-çıkış-gecikmesi",
    focus_item: 50512
  },
  {
    title: "Otomatik Ses",
    url: "/ayarlar/ses-ayarları/otomatik-ses",
    focus_item: 50513
  },
  {
    title: "Downmix Modu",
    url: "/ayarlar/ses-ayarları/downmix-modu",
    focus_item: 50514
  },
  {
    title: "DTS DRC",
    url: "/ayarlar/ses-ayarları/dts-drc",
    focus_item: 50515
  },
  {
    title: "Ses Ayarlarını Fabrika Ayarlarına Döndürme",
    url: "/ayarlar/ses-ayarları/ses-ayarlarını-fabrika-ayarlarına-döndürme",
    focus_item: 50516
  },
]