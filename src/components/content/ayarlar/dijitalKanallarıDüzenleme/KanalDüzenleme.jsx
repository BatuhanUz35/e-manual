import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/png/back.png";
import tv_icon from "../../../../assets/images/png/tv_icon.png";
import options from "../../../../assets/images/png/options.png";
import right from "../../../../assets/images/png/right.png";
import left from "../../../../assets/images/png/left.png";
import down from "../../../../assets/images/png/down.png";
import home from "../../../../assets/images/png/home.png";
import delete_icon from "../../../../assets/images/png/delete_icon.png";
import right_arrow from "../../../../assets/images/png/right_arrow.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


export default function KanalDüzenleme() {
  return (
    <div className="page">
      <p>
        Anasayfa / Ayarlar / Dijital Kanalları Düzenleme / Kanal Düzenleme
      </p>
      <div className="container">
        <h1>Kanal Düzenleme</h1>
        <ol>
          <li>
            Tv moduna geçmek için <img src={tv_icon} alt="tv ikonu" className="inline-icon"/> düğmesine basın.
          </li>
          <li>
            <img src={options} alt="ayarlar" className="inline-icon"/> ardından <img src={right} alt="sağ" className="inline-icon"/> düğmesiyle
            <b>Ayarlar</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Kanal</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Kanallar</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Kanal Düzenleme</b>'yi seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
             Düzenlemek istediğiniz kanalı seçip <Circle className="inline-icon button"/> düğmesine basın.
             <div><ArrowForwardIcon className="inline-icon xs"/> <b>Kanal Bilgileri</b> görüntülenir..</div>
          </li>
          <li>
            <b>Kanal Adı</b>'nı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Mevcut adı silmek için <img src={left} alt="sol" className="inline-icon sm"/>/<img src={right} alt="sağ" className="inline-icon sm"/>
            /<img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/ <img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            düğmesiyle <img src={delete_icon} alt="silme" className="inline-icon"/> tuşunu
            seçip <Circle className="inline-icon button"/> düğmesine basın
          </li>
          <li>
          <img src={left} alt="sol" className="inline-icon sm"/>/<img src={right} alt="sağ" className="inline-icon sm"/>
            /<img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/ <img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            karakter/sayıyı seçip <Circle className="inline-icon button"/> düğmesiyle
            bir sonraki karaktere geçin, aynı işlemi tüm karakter/rakamlar için uygulayın.
          </li>
          <li>
            Yeni adı kaydetmek için ekran klavyesinden  <img src={right_arrow} alt="sağ ok" className="inline-icon"/> düğmesini 
            seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon"/>, Home menüsüne
            dönmek için <img src={home} alt="home" className="inline-icon"/> veya
            TV yayınına dönmek için <img src={tv_icon} alt="tv ikonu" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </div>
    </div>
  );
}
