import React from "react";
import LanguageIcon from '@mui/icons-material/Language';
import "./Navbar.css"
import logo from "../../assets/beko.svg"
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../../redux/menuSlice'
import SearchBar from "../searchbar/SearchBar";
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { Box } from "@mui/material";
import MenuButton from "./MenuButton";

function Navbar() {
  const dispatch = useDispatch()
  const is_menu_active = useSelector((state) => state.menu.toggle);
  const menu_id = 2

  function handleKeyDown(event) {
    event.preventDefault();
    switch (event.key){
      case 'ArrowDown':
        if(is_menu_active){
          document.getElementById(3).focus();
        }
        break;
      default:
        break;
    }
  }

  return (
    <Box className="navbar">
      <ul className="navbar-left">
        <li className="menu-section" id={menu_id} tabindex="0" onKeyDown={handleKeyDown} onClick={() => dispatch(toggle())}>
          <MenuButton/>
        </li>
        <li className="logo">
          <img className="logo-img" src={logo} alt="logo"/>
        </li>
      </ul>
      <ul className="navbar-right">
        <li className="searchbar">
          <SearchBar/>
        </li>
        <li className="language-section">
          <LanguageIcon className="language-icon"/>
        </li>
      </ul>
    </Box>   
  );
}

export default withFocusable()(Navbar);