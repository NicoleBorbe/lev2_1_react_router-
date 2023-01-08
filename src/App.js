import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Speisen from "./Pages/Speisen";
import Open from "./Pages/Open";
import Kontakt from "./Pages/Kontakt"
import Galerie from "./Pages/Galerie";
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Nav />

      {/* Im Routes-Teil wird definiert, was gerendert werden soll, wenn die URL sich ändert */}
      <Routes>
        <Route path="/Speisekarte" element={<Speisen />} />
        <Route path="/Kontakt" element={<Kontakt />} />
        <Route path="/Öffnungszeiten" element={<Open />} />
        <Route path="/Galerie" element={<Galerie />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
