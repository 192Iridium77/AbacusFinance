import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import LogosGrid from "./LogosGrid";

SwiperCore.use([Pagination]);

export default function Services() {
  const loanOptions = [
    {
      title: `Long Term`,
      description: `Long term business loans are (secured by commercial or residential
        property) up to 25 years`,
      image: "images/Home.jpg",
      alt: "Home Long Term Finance",
    },
    {
      title: `Short Term`,
      description: `finance for seasonal variations such as overdrafts,
      unsecured/secured loans`,
      image: "images/warehouse.jpg",
      alt: "Business Warehouse",
    },
    {
      title: `Asset finance`,
      description: `finance for vehicles and business equipment`,
      image: "images/Excavator.jpg",
      alt: "Asset Finance",
    },
    {
      title: `Business Insurance`,
      description: "",
      image: "images/businessInsurance.jpg",
      alt: "Business Insurance",
    },
    {
      title: `Merchant Insurance`,
      description: "",
      image: "images/merchantInsurance.jpg",
      alt: "Merchant Insurance",
    },
  ];

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
        <SwiperSlide>
          <img
            className="logo"
            src="/logos/macquarie-bank.png"
            alt="Macquarie Bank"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="logo" src="/logos/bankwest.jpg" alt="Bankwest" />
        </SwiperSlide>
      </Swiper>
    );
  };

  const LoansOffered = () => {
    return (
      <div className="flex gap-4">
        {loanOptions.map((option) => {
          return (
            <div
              className="relative group"
              style={{ width: "20%", minHeight: "300px" }}
            >
              <div className="scrim"></div>
              <div
                className="w-full h-full bg-no-repeat bg-center bg-cover"
                style={{
                  backgroundImage: `url(${option.image})`,
                }}
              ></div>
              <div className="p-4 absolute flex flex-col justify-between inset-0 z-10 group">
                <div className=" text-white text-center font-bold">
                  {option.title}
                </div>
                <div className="hidden group-hover:block text-white text-center">
                  {option.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="anchor" id="services" />
      <div className="anchor" id="loans" />
      <h3>Loans Offered</h3>
      <ul className="mobile">
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
      <div className="desktop">
        <LoansOffered />
      </div>
      <div className="anchor" id="calculator" />
      <h3>Calculator</h3>
      <p>
        Here is a link to the federal government mortgage calculator. It will
        help you work out your mortgage repayments, borrowing capacity and when
        you can repay your loan sooner.
      </p>
      <div className="flex justify-center mt-8">
        <a
          className="inline-block bg-primary-600 rounded-sm text-white p-4 font-bold"
          href="https://moneysmart.gov.au/home-loans/mortgage-calculator"
        >
          Mortgage Calculator
        </a>
      </div>
      <div className="anchor" id="lenders" />
      <div className="flex gap-4">
        <div className="lg:w-6/12">
          <h3>Lenders</h3>
          <p>
            NAB, CAB, Suncorp, Prospa, ING, BankWest, Adelaide Bank, ANZ,
            Liberty, St. George, Westpac, Pepper Better Choice, Prime Capital,
            Murray Bridge Finance
          </p>
        </div>
        <div className="desktop lg:w-6/12 lg:mt-16">
          <LogosGrid />
        </div>
      </div>
      <LogosCarousel />
      <div className="anchor" id="benefits" />
      <div className="flex flex-col-reverse lg:flex-row mt-12">
        <div
          className="lg:w-6/12 bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url('images/relax.jpg')`,
            minHeight: "300px",
          }}
        ></div>
        <div className="lg:w-6/12 bg-primary-600 text-white p-8">
          <h3 className="mt-2 lg:mt-4">Benefits of a Broker</h3>
          <p>
            <b>Less stress</b>
          </p>
          <p>
            I make it easier for you by preparing the paperwork, edging the
            application and following up with the lender for you as your loan
            progresses to settlement.
          </p>
        </div>
      </div>
      <div className="anchor" id="cost" />
      <div className="lg:flex">
        <div className="lg:w-6/12 bg-primary-600 text-white p-8">
          <h3 className="mt-2 lg:mt-4">Cost of services</h3>
          <p>
            <b>No charge</b>
          </p>
          <p>
            There is no charge to you for my service because the lender pays me
            after your load settles.
          </p>
        </div>
        <div
          className="lg:w-6/12 bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url('images/cost.jpg')`,
            minHeight: "300px",
          }}
        ></div>
      </div>
    </div>
  );
}
