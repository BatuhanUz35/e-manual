import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import "./App.css"
import { BrowserRouter } from 'react-router-dom'

function App() {
  

  return (
    <>
    <Navbar className="navbar" />
    <Menu className="menu"/>
      <BrowserRouter>
      </BrowserRouter>
    </>

  );
}

export default App;
