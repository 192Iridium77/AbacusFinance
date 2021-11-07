import { ReactComponent as Phone } from "./icons/Phone.svg";
import { ReactComponent as Mail } from "./icons/Mail.svg";

export default function Services() {
  return (
    <div className="container">
      <div className="anchor" id="contact" />
      <h2 className="text-center">Contact</h2>
      <div className="anchor" id="calculator" />
      <h3>Calculator</h3>
      <p>
        Here is a link to the official SA government mortgage calculator. It
        will help you work out your mortgage repayments, borrowing capacity and
        when you can repay your loan sooner.
      </p>
      <div className="flex justify-center mt-8">
        <a
          className="inline-block bg-primary-600 rounded-sm text-white p-4 font-bold"
          href="https://moneysmart.gov.au/home-loans/mortgage-calculator"
        >
          Mortgage Calculator
        </a>
      </div>
      <div className="anchor" id="area" />
      <div className="flex flex-col-reverse lg:flex-row mt-8 lg:mt-12">
        <div
          className="lg:w-6/12 bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url('images/regions.jpg')`,
            minHeight: "300px",
          }}
        ></div>
        <div className="lg:w-6/12 bg-primary-600 text-white p-8">
          <h3 className="mt-4">Area of Service</h3>
          <p>
            I provide service to Adelaide, the Adelaide Hills and even through
            to Murray Bridge!
          </p>
        </div>
      </div>

      <div className="anchor" id="about" />
      <div className="lg:flex mt-0">
        <div className="lg:w-6/12 bg-primary-600 text-white p-8">
          <h3 className="mt-2 lg:mt-4">About me</h3>
          <p>
            My business lending experience is based on an extended period of
            lending with major banks financing everything from hot-air-balloons,
            commercial property, pawn trawlers to trucks and cars, etc.
          </p>
        </div>
        <div
          className="lg:flex lg:flex-col lg:w-6/12 justify-center lg:border border-primary-100"
          style={{ minHeight: "300px" }}
        >
          <div className="anchor" id="details" />
          <h2 className="text-center lg:mt-8 lg:mb-8">Stu Williams</h2>
          <p className="mt-4 lg:mt-8 font-bold text-center">
            Principal - Residential/Business/SMSF Finance Specialist
          </p>
          <a
            href="tel:0400 367 080"
            className="flex justify-center font-bold relative mt-4"
          >
            <div className="w-6 h-6 absolute lg:static lg:mr-4 left-0">
              <Phone />
            </div>
            0400 367 080
          </a>
          <a
            href="mailto:abacusfinance1@gmail.com"
            className="flex lg:mb-12 justify-center font-bold relative mt-4"
          >
            <div className="w-6 h-6 absolute lg:static lg:mr-4 left-0">
              <Mail />
            </div>
            abacusfinance1@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
