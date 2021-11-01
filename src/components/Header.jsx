import Carousel from "./Carousel";
import Testimonial from "./Testimonial";

export default function Header() {
  return (
    <div className="container flex">
      {/* <div className="w-4/12">
        <Testimonial>testimonial 1</Testimonial>
      </div>
      <div className="w-4/12">
        <Testimonial>testimonial 2</Testimonial>
      </div>
      <div>contact CTA</div> */}
      <Carousel>
        <div>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}
