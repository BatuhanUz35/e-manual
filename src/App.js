import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import "./App.css"
import { Routes, Route } from "react-router-dom";
import Anasayfa from "./components/content/Anasayfa";
import Kılavuz from "./components/content/Kılavuz";
import GüvenlikTalimatları from "./components/content/güvenlikTalimatları/GüvenlikTalimatları";
import KullanımAmacı from "./components/content/güvenlikTalimatları/KullanımAmacı";
import ElektrikGüvenliği from "./components/content/güvenlikTalimatları/ElektrikGüvenliği";
import YangınGüvenliği from "./components/content/güvenlikTalimatları/YangınGüvenliği";

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="app">
      <Navbar className="navbar" />
      <div className="main-container">
        <Menu className="menu" />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Anasayfa />} />
            <Route path="/kılavuz" element={<Kılavuz />} />
            <Route path="/güvenlik-talimatları" element={<GüvenlikTalimatları />} />
            <Route path="/güvenlik-talimatları/kullanım-amacı" element={<KullanımAmacı />} />
            <Route path="/güvenlik-talimatları/elektrik-güvenliği" element={<ElektrikGüvenliği />} />
            <Route path="/güvenlik-talimatları/yangın-güvenliği" element={<YangınGüvenliği />} />
          </Routes>
          <footer><hr />&copy; BEKO {year}</footer>
          </div>
      </div>
    </div>
  );
}

export default App;
