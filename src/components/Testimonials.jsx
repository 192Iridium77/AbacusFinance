import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

export default function Testimonials() {
  const Testimonial = ({ name, text, title }) => (
    <div className="p-4">
      <div className="text-center mt-4 font-bold">{name}</div>
      <div className="text-center text-xs tracking-wide uppercase mt-1">
        {title}
      </div>
      <div className="text-center mt-4">"{text}"</div>
    </div>
  );
  const testimonials = [
    {
      name: "David Schubert",
      title: "1st Home Buyer at 61 years of age",
      text: `Stu's done a great job and guided me through the issues that lenders were throwing.
        He is always making sure I am OK and has helped every step of the way right till the end.
        Bloody awesome.`,
    },
    {
      name: "Josye Henry",
      title: "1st home buyer as a single parent",
      text: `On a recommendation from Elders I was put on to Stu. He was sensitive to my needs and kept me up to date on how we were progressing.
      I needed someone who knew how to deal as an experienced mortgage broker - He didn't disappoint.`,
    },
    {
      name: "Bec Hoffmann",
      title: "Refinance of home plus property purchase",
      text: "Stu worked wonders in acquiring finance to purchase my first home. Stu walked me through every step with fantastic communication and positivity and achieved an excellent outcome. Thanks Stu!",
    },
  ];

  return (
    <div className="container my-12">
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
