import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";

export default function Carousel(props) {
  return <ResponsiveCarousel {...props}></ResponsiveCarousel>;
}
