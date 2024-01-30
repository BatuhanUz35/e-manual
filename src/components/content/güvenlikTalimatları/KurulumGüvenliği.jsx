import React from "react";
import "../style.css";
import { Box } from "@mui/material";

export default function KurulumGüvenliği() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Güvenlik Talimatları / Kurulum Güvenliği</p>
      <Box className="container">
        <h1>Kurulum Güvenliği</h1>
        <ul>
          <li>
            Ürünü, asla sağlam olmayan yerlere kurmayınız. Aksi durumda
            televizyon devrilebilir, yaralanma ve ölüme yol açabilir.
          </li>
          <li>
            Ürünü, üzerine koyacağınız sehpa vb. mobilyaların televizyonu
            taşıyabilecek sağlamlıkta olduğundan emin olun.
          </li>
          <li>
            Ürünün kenarları üzerine koyduğunuz sehpa vb. mobilyalardan taşmamış
            olmalıdır.
          </li>
          <li>
            Ürünü yüksek ve devrilme tehlikesi olan dolap, büfe, kitaplık gibi
            mobilyaların üzerine koymayın. Zorunlu hallerde bu tip taşıyıcılar
            ve televizyonun devrilmemesi için duvar vb. yapılara
            sabitlenmelidir.
          </li>
          <li>
            Ürün ile üzerine koyduğunuz sehpa/mobilya arasında örtü, dantel,
            bez, tül ya da benzeri eşyalar olmamalıdır.
          </li>
          <li>
            Ürünü ısıtıcıların yakınına ya da doğrudan güneş ışığına mauz
            kalacağı yerlere yerleştirmeyin.
          </li>
          <li>
            Yeterli havalandırma sağlamak için, ürünün etrafında en az 10cm
            boşluk bırakın.
          </li>
          <li>
            Bazı mobilya yüzeylerinde, lastik ile temas halinde renk bozulması
            olabilir. Mobilyalarınızı korumak için, ayağın altında camdan veya
            plastikten yapılmış bir levha kullanabilirsiniz. Kumaş veya paspas
            benzeri altlıklar kullanmayın.
          </li>
          <li>
            Ürünün her yer değişiminde yukarıda yazılı uyarıları göz önünde
            bulundurunuz.
          </li>
        </ul>
      </Box>
    </Box>
  );
}
