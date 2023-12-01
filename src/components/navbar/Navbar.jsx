import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.css"
import logo from "../../assets/beko.svg"
import { connect } from "react-redux";

import { useDispatch } from 'react-redux'
import { toggle } from '../../redux/menuSlice'

function Navbar() {
  const dispatch = useDispatch()

  return (
    <div className="navbar">
      <ul className="navbar-left">
        <li className="menu-section" onClick={() => dispatch(toggle())}>
         <div><MenuIcon/></div> 
          <div>Menu</div> 
        </li>
        <li className="logo">
          <img className="logo-img" src={logo} alt="logo"/>
        </li>
      </ul>
      <ul className="navbar-right">
        <li className="searchbar">
          searchbar
          <SearchIcon/>
        </li>
        <li className="language-section">
          <LanguageIcon className="language-icon"/>
        </li>
      </ul>
    </div>   
  );
}

function mapStateToProps(state) {
  return {
    is_menu_active: state.toggleMenuReducer
  }
}

export default connect(mapStateToProps)(Navbar)
