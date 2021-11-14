import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import LogosGrid from "./LogosGrid";

SwiperCore.use([Pagination]);

export default function Services() {
  const loanOptions = [
    {
      title: "Residential Services",
      description: (
        <ul>
          <li> Refinancing </li>
          <li> Investing </li>
          <li> Construction </li>
          <li> 1st home loans using government grants</li>
        </ul>
      ),
      leftImage: `images/Home.jpg`,
      rightImage: `images/construction.jpg`,
    },
    {
      title: "Commercial Services",
      description: (
        <ul>
          <li> Long term loans using residential &amp; commercial property </li>
          <li> Short term loans, overdrafts, unsecured loans </li>
          <li> Asset Finance </li>
          <li> Insurance</li>
        </ul>
      ),
      leftImage: `images/Excavator.jpg`,
      rightImage: `images/warehouse.jpg`,
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
              className="relative group w-6/12"
              style={{ minHeight: "300px" }}
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 scrim"></div>
              <div className="flex w-full h-full">
                <div
                  className="w-6/12 h-full bg-no-repeat bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${option.leftImage})`,
                  }}
                ></div>
                <div
                  className="w-6/12 h-full bg-no-repeat bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${option.rightImage})`,
                  }}
                ></div>
              </div>
              <div className="p-8 absolute flex flex-col justify-between inset-0 z-10 group">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-white text-center font-bold text-xl">
                  {option.title}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-white font-bold">
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
      <div className="anchor" id="loans" />
      <h3>Services Offered</h3>
      <div className="mobile">
        {loanOptions.map((option) => (
          <div className="flex flex-col gap-2 mb-4">
            <div className="font-bold">{option.title}</div>
            <div>{option.description}</div>
          </div>
        ))}
      </div>
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
            Just some of the 35+ lenders I can access include Adelaide Bank,
            ANZ, BankWest, Better Choice, CBA, Credit Union SA, Homestart, ING,
            Liberty Finance, Macquarie Bank, NAB, Pepper Money, St. George,
            Westpac
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
          <h3 className="mt-2 lg:mt-4">Benefits of Abacus Broker Finance</h3>
          <p>
            <b>Less stress</b>
          </p>
          <p>
            I compare lenders and you only need to complete the paperwork once.
            My job is to find the best lender’s products and services that match
            your needs and at an interest rate that saves you money. No
            uncomfortable meetings with lenders.
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
            My services are paid for by the lender and at no expense to
            yourself. My costs are NOT added to the loan interest or expenses.
            You pay the same as if you went direct to the lender. Why? The
            lenders are saving money and increasing their access to potential
            clients
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
