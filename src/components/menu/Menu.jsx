import { MenuItems } from "./MenuItems";
import "./Menu.css";
import { useSelector, useDispatch } from "react-redux";
import { activate } from '../../redux/menuSlice'
import { Link } from "react-router-dom";

export default function Menu() {
  const is_menu_active = useSelector((state) => state.menu.toggle);
  const selected_item = useSelector((state) => state.menu.active);
  const dispatch = useDispatch();

  return (
    <div className="menu" style={is_menu_active ? { } : { display: "none" }}>
      <div className="item-list">
        {MenuItems.map((item) => {
          return (
            <div>
            <div  item={item} onClick={() => dispatch(activate(item.title)) }>
              <Link to={item.url} className="item" id={selected_item === item.title ? "selected" : null}>
                  <div className="icon">{selected_item === item.title ? item.iconActive :  item.icon}</div>
                  <div className="title">{item.title}</div>    
              </Link>
              {item.submenu && selected_item === item.title ? item.submenu.map((item)=> {
              return(
                <Link to={item.url} className="subitem">
                  <div className="subitem-icon">{selected_item === item.title ? item.iconActive : item.icon}</div>
                  <div className="subitem-title">{item.title}</div>
                </Link>
              )
            }): null}
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

