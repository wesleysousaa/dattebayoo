import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Character from "../pages/characters/Characters";
import About from "../pages/about/About";
import Favorites from "../pages/favorites/Favorites";
import NotFound from "../pages/not-found/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="characters/:id" element={<Character />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
