export default function MenuOverlay({ onCloseMenu }) {
  const onNavigate = () => {
    onCloseMenu();
    return false;
  };
  return (
    <div className="fixed inset-0 h-screen bg-primary-600 text-white font-bold pt-20 z-10">
      <div className="container">
        <div className="text-2xl mt-8">Services</div>
        <div className="ml-4 mt-4 text-lg">
          <a href="#loans" className="block mt-2" onClick={onNavigate}>
            Services offered
          </a>
          <a href="#calculator" className="block mt-2" onClick={onNavigate}>
            Calculator
          </a>
          <a href="#lenders" className="block mt-2" onClick={onNavigate}>
            Lenders
          </a>
          <a href="#benefits" className="block mt-2" onClick={onNavigate}>
            Benefits of Abacus Broker Finance
          </a>
          <a href="#cost" className="block mt-2" onClick={onNavigate}>
            Cost of services
          </a>
        </div>
        <a href="#contact" className="block text-2xl mt-8" onClick={onNavigate}>
          Contact
        </a>
        <div className="ml-4 mt-4 text-lg">
          <a href="#area" className="block mt-2" onClick={onNavigate}>
            Area of service
          </a>
          <a href="#about" className="block mt-2" onClick={onNavigate}>
            About me
          </a>
          <a href="#details" className="block mt-2" onClick={onNavigate}>
            Contact details
          </a>
          <a href="#testimonials" className="block mt-2" onClick={onNavigate}>
            What people say
          </a>
        </div>
      </div>
    </div>
  );
}
