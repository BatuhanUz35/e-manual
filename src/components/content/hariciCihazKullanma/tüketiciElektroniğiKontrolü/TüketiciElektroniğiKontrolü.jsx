import React from "react";
import "../../style.css";
import { links } from "./TüketiciElektroniğiKontrolü_";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory,
} from "../../../../redux/menuSlice";

export default function TüketiciElektroniğiKontrolü() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Harici Cihaz Kullanma / CEC (Tüketici Elektroniği Kontrolü)</p>
      <Box className="container">
        <h1>CEC (Tüketici Elektroniği Kontrolü)</h1>
        <p>
          Televizyonunuzda CEC (Tüketici Elektroniği Kontrolü) özelliği bulunmaktadır. Bu özellik CEC (Tüketici Elektronik Kontrolü) protokolünü kullanır. 
          CEC özelliği televizyonunuz ile DVD oynatıcı STB veya video kaydedicinizi HDMI bağlantısı yaparak televizyon uzaktan kumanda ile kontrol edilmesini sağlar. 
          Bu özelliği bağlayacağınız cihaz da desteklemelidir.
        </p>
        <p>
         Televizyonunuz aşağıdaki fonksiyonları destekler. Özellik hakkında detaylı bilgi için harici cihazınızın kullanma kılavuzunu okuyun.
        </p>
        <h2>Ek bilgiler</h2>
        {links.map((link) => {
          return (
            <Box className="link-container">
              <LinkIcon />
              <Link
                to={link.url}
                className="link"
                onClick={() => {
                  dispatch(select_item(link.focus_item));
                  dispatch(activate_l1_subcategory(170000));
                  dispatch(activate_l2_subcategory(170100));
                  dispatch(focus_item(link.focus_item));
                }}
              >
                {link.title}
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
