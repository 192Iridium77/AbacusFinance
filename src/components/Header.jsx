import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import Testimonial from "./Testimonial";

SwiperCore.use([Pagination]);

export default function Header() {
  const testimonials = [
    {
      name: "David Schubert",
      text: `Stu's done a great job and guided me through the issues that lenders were throwing.
        He is always making sure I am OK and has helped every step of the way right till the end.
        Bloody awesome.`,
    },
    {
      name: "Josye Henry",
      text: `On a recommendation from Elders I was put on to Stu. He was sensitive to my needs and kept me up to date on how we were progressing.
      I needed someone who knew how to deal as an experienced mortgage broker - He didn't disappoint.`,
    },
    {
      name: "Bec Hoffmann",
      text: "Stu worked wonders in acquiring finance to purchase my first home. Stu walked me through every step with fantastic communication and positivity and achieved an excellent outcome. Thanks Stu!",
    },
  ];

  return (
    <div className="container">
      <div className="p-8 text-center text-4xl bg-primary-600 text-white">
        <div className="text-sm text-white uppercase">Our mission</div>
        <div>"Supporting small business sustain & growth"</div>
      </div>
      <div className="mobile">
        <Swiper className="mySwiper" pagination>
          {testimonials.map((testimonial) => (
            <SwiperSlide>
              <div className="pb-12">
                <Testimonial {...testimonial} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="desktop">
        <div className="flex">
          {testimonials.map((testimonial) => (
            <div className="w-4/12">
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
