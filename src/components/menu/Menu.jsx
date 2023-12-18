import { MenuItems } from "./MenuItems";
import "./Menu.css";
import { useSelector, useDispatch } from "react-redux";
import { select_item } from "../../redux/menuSlice";
import { select_subitem } from "../../redux/menuSlice";
import { Link } from "react-router-dom";

export default function Menu() {
  const is_menu_active = useSelector((state) => state.menu.toggle);
  const selected_item = useSelector((state) => state.menu.selected_item);
  const selected_subitem = useSelector((state) => state.menu.selected_subitem);
  const dispatch = useDispatch();

  return (
    <div className="menu" style={is_menu_active ? {} : { display: "none" }}>
      <div className="item-list">
        {MenuItems.map((item) => {
          return (
            <div>
              <div onClick={() => dispatch(select_item(item.title))}>
                <Link
                  to={item.url}
                  className="item"
                  id={selected_item === item.title ? "selected" : null}
                >
                  <div className="icon">
                    {selected_item === item.title ? item.iconActive : item.icon}
                  </div>
                  <p className="title">{item.title}</p>
                </Link>
                {item.submenu && selected_item === item.title
                  ? item.submenu.map((subitem) => {
                      return (
                        <div onClick={() => dispatch(select_subitem(subitem.title))}>
                          <Link to={subitem.url} className="subitem" id={selected_subitem === subitem.title ? "selected" : null}>
                            <div className="subitem-icon">
                              {selected_subitem === subitem.title
                                ? subitem.iconActive
                                : subitem.icon}
                            </div>
                            <div className="subitem-title">{subitem.title}</div>
                          </Link>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}