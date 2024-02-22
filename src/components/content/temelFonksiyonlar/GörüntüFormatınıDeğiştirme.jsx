import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./GörüntüFormatınıDeğiştirme_";

export default function GörüntüFormatınıDeğiştirme() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Görüntü Formatını Değiştirme</p>
      <Box className="container">
        <h1>Görüntü Formatını Değiştirme</h1>
        <p>Aşağıdaki görüntü formatlarından birini seçebilirsiniz.</p>
        <h2>Otomatik Format</h2>
        <p>
          Görüntü formatı, 16:9 formatındaki programlar için otomatik olarak 16:9 ayarına geçirilir.
        </p>
        <p>
        Görüntü formatı, 4:3 formatındaki programlar için otomatik olarak 4:3 ayarına geçirilir.
        </p>
        <h2>Tam Ekran Formatı</h2>
        <p>
          Bu mod seçili olduğunda HDMI ve Component girişlerinden gelen yüksek çözünürlüklü görüntü kırpılmadan 
          orijinal boyutları ile ekrana gelir. Bu mod sadece HDMI modu, 720p ve üzeri çözünürlüklerde aktif olur.
        </p>
        <h2>Süper Yakınlaştırma Formatı</h2>
        <p>
          Bu ayar, büyük genişlik/yükseklik oranına sahip filmler için uygundur.
        </p>
        <h2>Ölçeklendirilmemiş Format</h2>
        <p>
          Ölçeklendirilmemiş format, görüntüleri orijinal boyutunda görüntüler.
        </p>
        <h2>4:3 Formatı</h2>
        <p>
          Görüntü 4:3 formatında gösterilir.
        </p>
        <h2>Genişletilmiş Film 14:9 ve Genişletilmiş Film 16:9 Formatları</h2>
        <p>
          4:3 formatındaki programlar sırasında, 16:9 veya 14:9 seçilmesi halinde görüntü yatay olarak gerilir.
        </p>
        <p>
          Gerçek 16:9 sinyal kaynaklarında (uydu alıcısından veya Euro-AV soketinde), görüntü doğru 
          geometriye sahip olacak şekilde ekranı tümüyle doldurur.
        </p>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}

