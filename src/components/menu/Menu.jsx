import React from "react";
import { MenuItems } from "./MenuItems";
import "./Menu.css";
import { useSelector } from 'react-redux'

export default function Menu() {
  const is_menu_active = useSelector((state) => state.menu.value)
  return (
    <div className="menu" style={is_menu_active ? {}: {display: 'none'}}>
      <ul className="item-list">
        {MenuItems.map((item) => {
          return (
            <li className="item">
              <div className="icon">{item.icon}</div>
              <div className="title">{item.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
