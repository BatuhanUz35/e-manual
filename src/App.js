import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import "./App.css"
import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes"

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="">
      <Navbar className="navbar" />
      <div className="main-container">
        <Menu className="menu" />
        <div className="pages">
          <Routes>
            {routes.map((route) => {
              return (
                <Route path={route.path} element={<route.element />} />
              )
            })}
          </Routes>
          <footer><hr />&copy; BEKO {year}</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
