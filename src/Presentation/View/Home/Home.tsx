import { Box } from "@mui/material";
import { DefaultLayout } from "../../../layouts/Default/DefaultLayout";
import { SimpleToggleButton } from "../../../components/Button/Toggle/Simple/SimpleToggleButton";
import { ChevronRight } from "@mui/icons-material";
import { CardCarousel } from "../../../components/Caroussel/Card/CardCarousel";
import { DefaultCard } from "../../../components/Card/Default/DefaultCard";
import { useHomeController } from "../../Controller/Home/useHomeController";

export const Home: React.FC = () => {
  const {
    handleNavigate,
    cardContent,
    responsiveCarouselSlide,
    responsiveCarouselCard,
    slideImages,
  } = useHomeController();

  return (
    <DefaultLayout>
      <div id="sc-container-slider-carousel " className="w-screen sm:w-full sm:h-60 md:h-96 lg:h-120 2xl:h-160  overflow-hidden">
        {slideImages.map((slideImage, idx) => (
            <img
              src={slideImage.src}
              className="m-0 w-full sm:relative object-cover"
              key={`sc-img-${idx}`}
            />
        ))}
      </div>
      <div className="grid grid-cols-2 w-full mt-5 font-medium px-10">
        <SimpleToggleButton
          onClick={() => handleNavigate("/produtos/?name=h-type")}
          className="!text-sm  !text-neutral-700"
          buttonName="CONHEÇA"
          icon={<ChevronRight className="text-neutral-700" />}
        />
        <SimpleToggleButton
          onClick={() => handleNavigate("/produtos/?name=h-type")}
          className="!text-sm !text-neutral-700"
          buttonName="COMPRAR"
          icon={<ChevronRight />}
        />
      </div>
      <div className="px-4 sm:mb-2">
        <Box
          className="bg-gradient-to-r from-extra-dark-blue to-dark-blue-sky h-10 flex content-center items-center justify-center text-sm mt-10 mb-3"
          id="sc-container-card-carousel"
        >
          <h2 className="text-white text-center">
            Desbrave o <strong>desconhecido</strong>
          </h2>
        </Box>
        <CardCarousel
          card={DefaultCard({ cardContents: cardContent })}
          responsive={responsiveCarouselCard.responsive}
        />
      </div>
    </DefaultLayout>
  );
};
