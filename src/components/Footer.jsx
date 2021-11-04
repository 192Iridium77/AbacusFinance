export default function Footer() {
  const SiteMap = () => {
    return (
      <div className="flex">
        <div className="w-6/12">
          <a href="#services" className="block text-lg mt-2">
            Services
          </a>
          <div className="mt-4">
            <a href="#loans" className="block mt-1">
              Loans offered
            </a>
            <a href="#lenders" className="block mt-1">
              Lenders
            </a>
            <a href="#benefits" className="block mt-1">
              Benefits of a Broker
            </a>
            <a href="#cost" className="block mt-1">
              Cost of services
            </a>
          </div>
        </div>
        <div className="w-6/12">
          <a href="#contact" className="block text-lg mt-2">
            Contact
          </a>
          <div className="mt-4">
            <a href="#calculator" className="block mt-1">
              Calculator
            </a>
            <a href="#about" className="block mt-1">
              About Me
            </a>
            <a href="#details" className="block mt-1">
              Contact Details
            </a>
          </div>
        </div>
      </div>
    );
  };

  const BusinessDetails = () => {
    return (
      <div className="text-center">
        <div>ABACUS BROKER FINANCE PTY LTD </div>
        <div className="mt-2">
          BASc (Mathematics & Econometrics)/Cert IV FMB/ Dip FMB/MA Accounting
          (Training)
        </div>
        <div className="mt-2">ABN: 45 647 177 099 </div>
      </div>
    );
  };

  const Logos = () => {
    return <div>Logos</div>;
  };

  const Legal = () => {
    return (
      <div className="text-sm text-center text-gray-400">
        Abacus Broker Finance Pty Ltd ABN 45 647 177 099 has been licensed to
        use the trademarks owned by Choice Aggregation ABN 40 071 979 498.
        Australian Credit Licence 391237.
      </div>
    );
  };

  return (
    <div className="bg-primary-600 py-12 mt-8">
      <div className="container text-white">
        <div className="mobile">
          <SiteMap />
          <div className="mt-12">
            <BusinessDetails />
          </div>
          <div className="mt-12">
            <Logos />
          </div>
          <div className="mt-12">
            <Legal />
          </div>
        </div>
        <div className="desktop">
          <div className="flex">
            <div className="w-6/12">
              <SiteMap />
            </div>
            <div className="w-6/12">
              <BusinessDetails />
            </div>
          </div>
          <div className="flex mt-12">
            <div className="w-6/12">
              <Logos />
            </div>
            <div className="w-6/12">
              <Legal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
