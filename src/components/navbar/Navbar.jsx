import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from '@mui/icons-material/Language';
import "./Navbar.css"
import logo from "../../assets/beko.svg"
import { useDispatch } from 'react-redux'
import { toggle } from '../../redux/menuSlice'
import SearchBar from "../searchbar/SearchBar";
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

function Navbar() {
  const dispatch = useDispatch()

  return (
    <div className="navbar">
      <ul className="navbar-left">
        <li className="menu-section" onClick={() => dispatch(toggle())}>
         <div className="menu-wrapper"><MenuIcon/>Menu</div> 
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
    </div>   
  );
}

export default withFocusable()(Navbar);