import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modles
import SwiperCore, { Pagination } from "swiper";

import Testimonial from "./Testimonial";

SwiperCore.use([Pagination]);

export default function Header() {
  const testimonials = [
    {
      image: "",
      name: "Jane Smith",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel finibus libero, a vulputate nibh.",
    },
    {
      image: "",
      name: "Jane Smith",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel finibus libero, a vulputate nibh.",
    },
    {
      image: "",
      name: "Jane Smith",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel finibus libero, a vulputate nibh.",
    },
  ];

  return (
    <div className="container" showArrows={true}>
      <div className="lg:hidden">
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
      <div className="hidden lg:block">
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
