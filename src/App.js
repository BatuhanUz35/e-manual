import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import "./App.css"
import { Routes, Route } from "react-router-dom";
import Anasayfa from "./components/content/Anasayfa";

function App() {
  return (
    <div>
      <Navbar className="navbar" />
      <div className="container">
      <Menu className="menu" />
        <Routes>
          <Route path="/" element={<Anasayfa/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
