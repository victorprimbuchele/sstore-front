import Carousel from "react-multi-carousel";
import { useMemo } from "react";
import { CardCarouselProps } from "./CardCarousel.types";
import "react-multi-carousel/lib/styles.css";
import SpacecraftPromotionShipImage from "../../../assets/layout/home/slider/spacecraftpromotionalspacehomeslider.svg";
import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { SimpleToggleButton } from "../../Button/Toggle/Simple/SimpleToggleButton";

const cardContents = [
  {
    imgHeight: "140",
    imgSrc: SpacecraftPromotionShipImage,
    imgAlt: "green iguana",
    routeName: "/green-iguana",
    id: 1,
    description: "Uma iguana verde",
  },
  {
    imgHeight: "140",
    imgSrc: SpacecraftPromotionShipImage,
    imgAlt: "red iguana",
    routeName: "/red-iguana",
    id: 2,
    description: "Uma iguana verde",
  },
  {
    imgHeight: "140",
    imgSrc: SpacecraftPromotionShipImage,
    imgAlt: "green iguana",
    routeName: "/green-iguana",
    id: 1,
    description: "Uma iguana verde",
  },
  {
    imgHeight: "140",
    imgSrc: SpacecraftPromotionShipImage,
    imgAlt: "red iguana",
    routeName: "/red-iguana",
    id: 2,
    description: "Uma iguana verde",
  },
  {
    imgHeight: "140",
    imgSrc: SpacecraftPromotionShipImage,
    imgAlt: "green iguana",
    routeName: "/green-iguana",
    id: 1,
    description: "Uma iguana verde",
  },
  {
    imgHeight: "140",
    imgSrc: SpacecraftPromotionShipImage,
    imgAlt: "red iguana",
    routeName: "/red-iguana",
    id: 2,
    description: "Uma iguana verde",
  },
];

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
    // partialVisible={true}
    centerMode={true}
  >
    {card}
  </Carousel>
);
