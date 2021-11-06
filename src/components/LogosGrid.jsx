import { ReactComponent as Macquarie } from "./Macquarie-logo.svg";

export default function LogosGrid() {
  const columns = "w-3/12";
  return (
    <div className="flex flex-wrap items-center">
      <div className={columns}>
        <img className="logo" src="/logos/anz-2-logo.png" alt="ANZ" />
      </div>
      <div className={columns}>
        <img
          className="logo"
          src="/logos/BHCL_FullColour_221021.jpg"
          alt="Mortgage Choice"
        />
      </div>
      <div className={columns}>
        <img className="logo" src="/logos/commbank-full.jpg" alt="Commbank" />
      </div>
      <div className={columns}>
        <img className="logo p-8" src="/logos/CUSA.png" alt="Credit Union SA" />
      </div>
      <div className={columns}>
        <img className="logo" src="/logos/ING.png" alt="ING" />
      </div>
      <div className={columns}>
        <img className="logo" src="/logos/peppermoney.jpg" alt="Pepper Money" />
      </div>
      <div className={columns}>
        <img className="logo" src="/logos/HSGov.jpg" alt="Home Start" />
      </div>
      <div className={columns}>
        <Macquarie></Macquarie>
      </div>
    </div>
  );
}
