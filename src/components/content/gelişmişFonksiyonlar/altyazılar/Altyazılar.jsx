import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import sub from "../../../../assets/images/icons/sub.png"
import { Box } from "@mui/material";
import { links } from "./Altyazılar_";
import { useDispatch } from "react-redux";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory,
} from "../../../../redux/menuSlice";

export default function Altyazılar() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Altyazılar</p>
      <Box className="container">
        <h1>Altyazılar</h1>
        <ol>
          <li>
            <b>Gelişmiş Seçenekler</b> menüsünden <b>Altyazı</b>'yı seçip <Circle className="inline-icon button"/>
            {" "} düğmesine basın.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs" /><Box><b>Altyazı</b> menüsü görüntülenir.</Box>
            </Box>
          </li>
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            TV modunda kumanda üzerinde bulunan <img src={sub} alt="Sub" className="inline-icon"/> düğmesine
            basarak <b>Altyazı</b> menüsünü açabilirsiniz.
          </li>
        </ul>
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
                  dispatch(
                    activate_l1_subcategory(
                      link.focus_item - (link.focus_item % 10000)
                    )
                  );
                  dispatch(
                    activate_l2_subcategory(
                      link.focus_item - (link.focus_item % 100)
                    )
                  );
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

