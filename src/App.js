import { useState } from "react";

import Navigation from "./components/Navigation";
import MenuOverlay from "./components/MenuOverlay";

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    document.body.style.overflow = showMenu ? "auto" : "hidden";
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative">
      <Navigation onOpenMenu={toggleMenu} />
      <div className="pt-20 bg-gray-500 h-screen">Content</div>
      {showMenu && <MenuOverlay onCloseMenu={toggleMenu} />}
    </div>
  );
}
