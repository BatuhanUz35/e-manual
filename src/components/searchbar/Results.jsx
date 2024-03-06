import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { routes } from "../pages/Routes";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import "./Results.css";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory
} from "../../redux/menuSlice";

export default function Results() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.searchbar.searchTerm);

  const filteredRoutes = routes.filter((route) => {
    return route.title?.toLowerCase().includes(searchTerm?.toLowerCase());
  });

  return (
    <Box className="page">
      <Box className="container">
      <Box className="uyarı-başlık blue-bg">Ara</Box>
        <Box>
          <p className="search-info"><b>{searchTerm}</b> için bulunan sonuçlar: <b>{filteredRoutes.length}</b></p>
          <ul>
          {filteredRoutes.map((link) => (
            <li className="result-container">
              <Link to={link.path} className="result"
              onClick={() => {
                dispatch(select_item(link.focus_item));
                dispatch(activate_l1_subcategory(link.focus_item - (link.focus_item % 10000)));
                dispatch(activate_l2_subcategory(link.focus_item - (link.focus_item % 100)));
                dispatch(focus_item(link.focus_item));    
              }}>
                {link.title}
              </Link>
            </li>
          ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
