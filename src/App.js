import { useState } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import Navigation from "./components/Navigation";
import MenuOverlay from "./components/MenuOverlay";
import Header from "./components/Header";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    document.body.style.overflow = showMenu ? "auto" : "hidden";
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative">
      <Navigation onOpenMenu={toggleMenu} />
      <div className="pt-8">
        <Header></Header>
        <Services />
        <Contact />
      </div>
      <Footer />
      {showMenu && <MenuOverlay onCloseMenu={toggleMenu} />}
    </div>
  );
}
