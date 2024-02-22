import React from "react";
import "./style.css";
import { Box, Table, TableCell, TableRow } from "@mui/material";
import hizmet_talebinin_değerlendirilmesi from "../../assets/images/in-page-images/hizmet_talebinin_değerlendirilmesi.png"

export default function MüşteriMemnuniyetiPolitikası() {
 
  return (
    <Box className="page">
      <p>Ana sayfa / Müşteri Memnuniyeti Politikası</p>
      <Box className="container">
        <h1>Müşteri Memnuniyeti Politikası</h1>
        <Table>
          <TableRow>
            <TableCell className="table-cell" colSpan="2">Müşterilerimizin istek ve önerilerini her kanaldan karşılamaktan mutluluk duyarız.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="width_50 table-cell">
              <b>Kanallarımız:</b>
              <p><b>Çağrı Merkezimiz:</b></p>
              <p>0850 210 0 888</p>
              <p>(Sabit telefonlardan veya cep telefonlarından alan kodu çevirmeden arayın*)</p>
              <p><b>Diğer Numaramız:</b></p>
              <p>0216 585 8 888</p>
              <p>Çağrı Merkezimiz haftanın 7 günü 24 saat hizmet vermektedir.</p>
              <p>Çağrı Merkezimiz ile yaptığınız görüşmeler iletişim hizmeti aldığınız operatör firma tarafından sizin için tanımlanan tarifeye göre ücretlendirilir.</p>
              <p>- Sabit veya cep telefonlarınızdan alan kodu tuşlamadan çağrı merkezi numaramızı arayarak ürününüz ile ilgili arzu ettiğiniz hizmeti talep edebilirsiniz.</p>
              <p><b>Whatsapp Numaramız:</b> 0544 444 0 888</p>
              <p><b>Faks Numaramız:</b> 0216 423 2353</p>
              <p><b>Web Adresimiz:</b>  <u>www.beko.com.tr</u></p>
            </TableCell>
            <TableCell className="width_50 table-cell">
              <b>E-posta Adresimiz:</b>
              <p>musteri.hizmetleri@beko.com</p>
              <b>Sosyal Medya Hesaplarımız:</b>
              <p><u>https://www.facebook.com/bekoturkiye/</u></p>
              <p><u>https://www.youtube.com/user/BekoChannel/</u></p>
              <p><u>https://www.instagram.com/bekoturkiye/</u></p>
              <p><u>https://www.twitter.com/beko_tr/</u></p>
              <p><b>Posta Adresimiz:</b></p>
              <p>Arçelik A.Ş. Karaağaç Caddesi No:2-6 34445,</p>
              <p>Sütlüce / İSTANBUL</p>
              <p><b>Bayilerimiz:</b></p>
              <p><u>https://www.beko.com.tr/yetkili-satici/</u></p>
              <p><b>Yetkili Servislerimiz:</b></p>
              <p><u>https://www.beko.com.tr/yetkili-servis/</u></p>
              <p><b>Online servis randevusu almak için:</b></p>
              <p><u>http://digital.arcelik.com.tr</u></p>
              <p>- Tüm yetkili servis istasyonu bilgilerimiz, Ticaret Bakanlığı tarafından oluşturulan “Servis Bilgi Sistemi’nde (www.servis.gov.tr) yer almaktadır.</p>
              <p>- Yedek parça malzemeleri yetkili servislerimizden temin edilebilir.</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="table-cell" colSpan="2">
              <p>Müşterilerimizden iletilen istek ve önerilerin tarafımıza ulaştığı bilgisini, müşteri profili ayrımı yapılmaksızın kendilerine 24 saat içinde veririz.</p>
              <p><b>Müşteri Hizmetleri sürecimiz:</b></p>
              <p>Müşterilerimizin istek ve önerilerini;</p>
              <p>- İzlenebilir, raporlanabilir, şeffaf ve güvenli tek bir bilgi havuzunda toplarız.</p>
              <p>- Yasal düzenlemelere uygun, objektif, adil ve gizlilik içinde ele alır ve değerlendiririz.</p>
              <p>- Bu geri bildirimleri süreçlerimizin daha mükemmel hale getirilmesinde kullanırız.</p>
              <p>Beko olarak, mükemmel müşteri deneyimini yaşatmayı ana ilke olarak kabul eder, müşteri odaklı bir yaklaşım benimseriz.</p>
              <p>Bütün süreçlerimizi yönetim sistemi ile entegre ederek birbirini kontrol eden bir yapı geliştirilmesini sağlarız. Yönetim hedeflerini de bu sistem üzerinden besleriz.</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="table-cell" colSpan="2">
              <p><b>Aşağıdaki önerilere uymanızı rica ederiz.</b></p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="table-cell" colSpan="2">
              <p>Ürününüzü aldığınızda Garanti belgesini Yetkili Satıcınıza onaylattırınız.</p>
              <p>Ürününüzü kullanma kılavuzu esaslarına göre kullanınız.</p>
              <p>Ürününüz ile ilgili hizmet talebiniz olduğunda yukarıdaki telefon numaralarından Çağrı Merkezimize başvurunuz.</p>
              <p>Hizmet için gelen teknisyene “teknisyen kimlik kartı’nı sorunuz.</p>
              <p>İşiniz bittiğinde Yetkili servis teknisyeninden “Hizmet Fişi” istemeyi unutmayınız. alacağınız “Hizmet Fişi”, ilerde ürününüzde meydana gelebilecek herhangi bir sorunda size yarar sağlayacaktır.</p>
              <p>Ürünün kullanım ömrü: 10 yıldır. (Ürünün fonksiyonunu yerine getirebilmesi için gerekli yedek parça bulundurma süresi)</p>
            </TableCell>
          </TableRow>
        </Table>
        <h2>Hizmet Talebinin Değerlendirilmesi</h2>
        <img src={hizmet_talebinin_değerlendirilmesi} alt="Hizmet Talebinin Değerlendirilmesi" className="in-page-img" />
      </Box>
    </Box>
  );
}
