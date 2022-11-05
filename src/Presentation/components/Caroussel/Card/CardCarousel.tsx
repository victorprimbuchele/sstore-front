import Carousel from "react-multi-carousel";
import { CardCarouselProps } from "./CardCarousel.types";
import "react-multi-carousel/lib/styles.css";

export const CardCarousel: React.FC<CardCarouselProps> = ({
  card,
  responsive,
}) => (
  <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    infinite={true}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass={"w-full"}
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    centerMode={true}
  >
    {card}
  </Carousel>
);
