import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import Testimonial from "./Testimonial";

SwiperCore.use([Pagination]);

export default function Header() {
  const testimonials = [
    {
      image: "",
      name: "Josye Henry",
      text: `On a recommendation from Elders I was put on to Stu. He was sensitive to my needs and kept me up to date on how we were progressing.
      I needed someone who knew how to deal as an experienced mortgage broker - He didn't disappoint.
      We had to dig deep to get results, due to circumstances, but with Stu's contacts and knowledge of the banking and loans system my wish was granted.
      The Australian dream is achievable. If it's a mortgage you are looking for contact Stu William`,
    },
    {
      image: "",
      name: "David Schubert",
      text: `Stu's done a great job and guided me through the issues that lenders were throwing.
      He is always making sure I am OK and has helped every step of the way right till the end.
      Bloody awesome.`,
    },
    {
      image: "",
      name: "Jane Smith",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel finibus libero, a vulputate nibh.",
    },
  ];

  return (
    <div className="container">
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
