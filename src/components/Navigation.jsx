import { ReactComponent as Menu } from "./icons/Menu.svg";
import { ReactComponent as Phone } from "./icons/Phone.svg";

export default function Navigation({ onOpenMenu }) {
  return (
    <div className="z-20 sticky bg-white top-0 border-b border-primary-100">
      <div className="container">
        <div className="flex justify-between py-4 items-center">
          <div className="flex items-center gap-4">
            <img
              alt="Abacus Logo"
              src="/abacusLogo.png"
              width="40"
              height="40"
            />
            <h1>Abacus Broker Finance</h1>
          </div>
          <div className="flex gap-4">
            <a className="w-6 h-6" href="tel:0412345678">
              <Phone />
            </a>
            <button className="w-6 h-6" onClick={onOpenMenu}>
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
