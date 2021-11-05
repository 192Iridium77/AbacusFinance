import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);

export default function Services() {
  const LogosCarousel = () => {
    return (
      <Swiper className="mySwiper mobile" pagination>
        <SwiperSlide>
          <img className="logo" src="/logos/anz-2-logo.png" alt="ANZ" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="logo mt-20"
            src="/logos/BHCL_FullColour_221021.jpg"
            alt="Mortgage Choice"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="logo" src="/logos/commbank-full.jpg" alt="Commbank" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="logo p-8"
            src="/logos/CUSA.png"
            alt="Credit Union SA"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="logo" src="/logos/ING.png" alt="ING" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="logo"
            src="/logos/peppermoney.jpg"
            alt="Pepper Money"
          />
        </SwiperSlide>
      </Swiper>
    );
  };

  const LogosGrid = () => {
    const columns = "w-4/12";
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
          <img
            className="logo p-8"
            src="/logos/CUSA.png"
            alt="Credit Union SA"
          />
        </div>
        <div className={columns}>
          <img className="logo" src="/logos/ING.png" alt="ING" />
        </div>
        <div className={columns}>
          <img
            className="logo"
            src="/logos/peppermoney.jpg"
            alt="Pepper Money"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="anchor" id="services" />
      <h2 id="services" className="text-center">
        Services
      </h2>
      <div className="anchor" id="loans" />
      <h3>Loans Offered</h3>
      <ul>
        <li>
          <b>Long term business loans</b> (secured by commercial or residential
          property) up to 25 years
        </li>
        <li>
          <b>Short term finance</b> for seasonal variations such as overdrafts,
          unsecured/secured loans
        </li>
        <li>
          <b>Asset finance</b> for vehicles and business equipment
        </li>
        <li>
          <b>Business Insurance</b>
        </li>
        <li>
          <b>Merchant Insurance</b>
        </li>
      </ul>
      <div className="anchor" id="lenders" />
      <div className="flex">
        <div className="lg:w-6/12">
          <h3>Lenders</h3>
          <p>
            NAB, CAB, Suncorp, Prospa, ING, BankWest, Adelaide Bank, ANZ,
            Liberty, St. George, Westpac, Pepper Better Choice, Prime Capital,
            Murray Bridge Finance
          </p>
        </div>
        <div className="desktop lg:w-6/12">
          <LogosGrid />
        </div>
      </div>
      <LogosCarousel />
      <div className="anchor" id="benefits" />
      <h3>Benefits of a Broker</h3>
      <p>
        <b>Less stress</b>
      </p>
      <p>
        I make it easier for you by preparing the paperwork, edging the
        application and following up with the lender for you as your loan
        progresses to settlement.
      </p>
      <div className="anchor" id="cost" />
      <h3>Cost of services</h3>
      <p>
        <b>No charge</b>
      </p>
      <p>
        There is no charge to you for my service because the lender pays me
        after your load settles.
      </p>
    </div>
  );
}
