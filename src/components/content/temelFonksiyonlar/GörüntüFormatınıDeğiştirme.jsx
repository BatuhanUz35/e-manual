import React from "react";
import "../style.css";
import tv_icon from "../../../assets/images/icons/tv_icon.png";
import options from "../../../assets/images/icons/options.png";
import home from "../../../assets/images/icons/home.png"
import back from "../../../assets/images/icons/back.png";
import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function GörüntüFormatınıDeğiştirme() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Görüntü Formatını Değiştirme</p>
      <Box className="container">
        <h1>Görüntü Formatını Değiştirme</h1>
        <p classname="text">Aşağıdaki görüntü formatlarından birini seçebilirsiniz.</p>
        <h2>Otomatik Format</h2>
        <p classname="text">
          Görüntü formatı, 16:9 formatındaki programlar için otomatik olarak 16:9 ayarına geçirilir.
        </p>
        <p classname="text">
        Görüntü formatı, 4:3 formatındaki programlar için otomatik olarak 4:3 ayarına geçirilir.
        </p>
        <h2>Tam Ekran Formatı</h2>
        <p classname="text">
          Bu mod seçili olduğunda HDMI ve Component girişlerinden gelen yüksek çözünürlüklü görüntü kırpılmadan 
          orijinal boyutları ile ekrana gelir. Bu mod sadece HDMI modu, 720p ve üzeri çözünürlüklerde aktif olur.
        </p>
        <h2>Süper Yakınlaştırma Formatı</h2>
        <p classname="text">
          Bu ayar, büyük genişlik/yükseklik oranına sahip filmler için uygundur.
        </p>
        <h2>Ölçeklendirilmemiş Format</h2>
        <p classname="text">
          Ölçeklendirilmemiş format, görüntüleri orijinal boyutunda görüntüler.
        </p>
        <h2>4:3 Formatı</h2>
        <p classname="text">
          Görüntü 4:3 formatında gösterilir.
        </p>
        <h2>Genişletilmiş Film 14:9 ve Genişletilmiş Film 16:9 Formatları</h2>
        <p classname="text">
          4:3 formatındaki programlar sırasında, 16:9 veya 14:9 seçilmesi halinde görüntü yatay olarak gerilir.
        </p>
        <p classname="text">
          Gerçek 16:9 sinyal kaynaklarında (uydu alıcısından veya Euro-AV soketinde), görüntü doğru 
          geometriye sahip olacak şekilde ekranı tümüyle doldurur.
        </p>
        <ol>
          <li>
            <img src={tv_icon} alt="TV" className="inline-icon"/> ardından <img src={options} alt="seçenekler" className="inline-icon"/>
            {" "}düğmesine basın.
          </li>
          <li>
            <b>Resim</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Görüntü Modu</b>'nu seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Görüntü Modunu seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon"/>, Home menüsüne dönmek
            için <img src={home} alt="home" className="inline-icon"/> veya TV yayınına dönmek için
            {" "}<img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}

