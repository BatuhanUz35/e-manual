import React from "react";
import "../style.css";

export default function DurağanResimler() {
  return (
    <div className="page">
      <p>
        Anasayfa / Çevre Talimatları ve Genel Bilgiler / Durağan Resimler
        İle İlgili Bilgiler
      </p>
      <div className="container">
        <h1>Durağan Resimler İle İlgili Bilgiler</h1>
        <ul>
          <li>
            Ekranda uzun süreli aynı görüntünün izlenmesi, sabit resmin arka planda zayıf olarak
            belirmesine neden olabilir. Arka planda belirebilecek zayıf resim(ler), LCD/LED teknolojisi
            kaynaklıdır ve garanti kapsamında müdahale gerektirmez. Bu drumlar ile karşılaşmamak ve/veya
            etkiyi en aza indirmek için aşağıdaki önerileri uygulayabilirsinizx
          </li>
          <li>
            Aynı TV kanalının çok uzun süreli ekranda olmasını engelleyiniz. Kanal logoları bu etkiyi gösterebilir.
          </li>
          <li>
           Tam ekran olmayan görüntülerin sürekli ekranda kalmasını engelleyiniz; yayıncı tarafından tam ekran
           yollanmayan içerikleri görüntü formatlarını değiştirerek tam ekran haline getirebilirsiniz.
          </li>
          <li>
            Cihaz üzerinde açma/kapama düğmesi varsa, bu düğmeyi kullanarak cihazı kapatmanız da 
            yeterli olacaktır. Böylece cihazın elektrik tüketimi hemen hemen 0 Watt'a inecektir.
          </li>
          <li>
           TV'nizi yüksek parlaklık ve/veya kontrast değerleri ile izlemeniz, bu etkinin daha hızlı belirmesine
           neden olacağından, TV'nizi memnun olacağınız en düşük parlaklık ve kontrast seviyesinde izlemeniz önerilir.
          </li>
        </ul>
      </div>
    </div>
  );
}
