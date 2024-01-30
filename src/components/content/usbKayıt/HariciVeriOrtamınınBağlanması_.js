import { Box } from "@mui/material"

export const ul = [
  "Harici veri ortamını bağlamadan önce, televizyonu bekleme (stand-by) " +
  "konumuna almanız tavsiye edilir.",

  "Harici veri ortamının bağlantısını kesmeden önce, televizyon bekleme (stand-by) " +
  "konumuna getirilmelidir; aksi takdirde, dosyalar zarar görebilir.",

  <Box>
    Televizyon üzerinde <b>USB1</b> ve <b>USB2 (HDD)</b> olmak üzere iki adet USB girişi
    bulunmaktadır.
  </Box>,

  <Box>
    <b>USB2 (HDD)</b> girişine ilave güce ihtiyacı olan (örneğin harici sabit disk) USB 
    aygıt bağlanır
  </Box>,
]

export const ol = [
  <Box>
    Harici sabit diski <b>USB2 (HDD)</b> USB arayüzüne takın veya bellek çubuğunu
    <b> USB1</b> arayüzüne takın.
  </Box>
]

export const notlar = {
  ul: [
    <Box>
      USB standardına göre televizyonun <b>USB1</b> USB1 soketi, 500 mA'lık akımı destekler.
      Harici sabit disk vb. gibi daha yüksek güç harcayan cihazlarınızı televizyonun sadece 
      USB2 (HDD) USB arayüzüne bağlayabilirsiniz.
    </Box>,

    <Box>
      <b>USB2 (HDD)</b> USB arayüzüne bağlanılan harici dsabit disk ile beraber güç kablosu
      kullanıldığı durumlarda TV kapatıldığında harici hard diskin de güç kablosu çekilmelidir.
    </Box>,

    "USB Aygıtından herhangi bir dosya okunurken USB Aygıtının TV'den çıkarılması gerekmektedir."
  ]
}