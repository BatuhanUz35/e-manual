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
    title: "Ağ Şifresini Girerek Otomatik Bağlantı",
    url: "/ağ-kurulumu/kablosuz-ağ-ayarları/ağ-şifresini-girerek-otomatik-bağlantı",
    focus_item: 180401,
  },
  {
    title: "Ağ Şifresini Girerek Manuel Bağlantı",
    url: "/ağ-kurulumu/kablosuz-ağ-ayarları/ağ-şifresini-girerek-manuel-bağlantı",
    focus_item: 180402,
  },
  {
    title: "Gizli Bir Kablosuz Ağa Bağlantı",
    url: "/ağ-kurulumu/kablosuz-ağ-ayarları/gizli-bir-kablosuz-ağa-bağlantı",
    focus_item: 180403,
  },
]