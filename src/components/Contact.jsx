import { ReactComponent as Phone } from "./icons/Phone.svg";
import { ReactComponent as Mail } from "./icons/Mail.svg";

export default function Services() {
  return (
    <div className="container">
      <h2 className="text-center" id="contact">
        Contact
      </h2>
      <div className="anchor" id="calculator" />
      <h3>Calculator</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        ornare suscipit sem ac imperdiet. Nullam quis tellus nec justo rutrum
        malesuada id at orci. Maecenas interdum euismod quam, et varius nibh
        porttitor vel.
      </p>
      <div className="lg:flex lg:mt-12 mt-8 lg:mt-0">
        <div className="lg:w-6/12 bg-primary-600 text-white p-8">
          <div className="anchor" id="about" />
          <h3 className="mt-2 lg:mt-4">About me</h3>
          <p>
            My business lending experience is based on an extended period of
            lending with major banks financing everything from hot-air-balloons,
            commercial property, pawn trawlers to trucks and cars, etc.
          </p>
        </div>
        <div className="lg:w-6/12">
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
