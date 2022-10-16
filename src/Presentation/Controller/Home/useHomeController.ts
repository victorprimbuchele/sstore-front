import { useNavigate } from "react-router-dom";
import SpacecraftPromotionShipImage from "../../../assets/layout/home/slider/spacecraftpromotionalspacehomeslider.svg";

export const useHomeController = () => {
  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(route);
  };

  const slideImages = [
    {
      src: SpacecraftPromotionShipImage,
    },
  ];

  const cardContent = [
    {
      imgHeight: "140",
      imgSrc: SpacecraftPromotionShipImage,
      imgAlt: "green iguana",
      routeName: "/green-iguana",
      title: "Iguana verde",
      id: 1,
      description: "Uma iguana verde",
    },
    {
      imgHeight: "240",
      imgSrc: SpacecraftPromotionShipImage,
      imgAlt: "red iguana",
      routeName: "/red-iguana",
      title: "Iguana verde",
      id: 2,
      description: null,
    },
    {
      imgHeight: "140",
      imgSrc: SpacecraftPromotionShipImage,
      imgAlt: "green iguana",
      routeName: "/green-iguana",
      title: "Iguana verde",
      id: 3,
      description: "Uma iguana verde",
    },
    {
      imgHeight: "240",
      imgSrc: SpacecraftPromotionShipImage,
      imgAlt: "red iguana",
      routeName: "/red-iguana",
      title: "Iguana verde",
      id: 4,
      description: null,
    },
  ];

  const responsiveCarouselSlide = {
    responsive: {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    },
  };

  const responsiveCarouselCard = {
    responsive: {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    },
  };

  return {
    handleNavigate,
    cardContent,
    responsiveCarouselSlide,
    responsiveCarouselCard,
    slideImages,
  };
};
