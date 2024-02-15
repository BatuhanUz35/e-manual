import { Box } from "@mui/material";

export const ol = [
  <Box>
    <b>Otomatik Bağlantı:</b> tüm bağlantı ayarları (<b>IP Adersi</b>, <b>Netmask</b>, <b>Gateway</b> ve
    <b> DNS</b>) bilgileri modemden otomatik olarak alınır.
  </Box>,
  <Box>
    <b>Manuel Bağlantı:</b> tüm bağlantı ayarları (<b>IP Adersi</b>, <b>Netmask</b>, <b>Gateway</b> ve
    <b> DNS</b>) bilgileri manul olarak yapılandırılması gerekir.
  </Box>
]

export const links = [
  {
    title: "Otomatik Bağlantı",
    url: "/ağ-kurulumu/kablolu-ağ-ayarları/otomatik-bağlantı",
    focus_item: 180201,
  },
  {
    title: "Manuel Bağlantı",
    url: "/ağ-kurulumu/kablolu-ağ-ayarları/manuel-bağlantı",
    focus_item: 180202,
  },
]