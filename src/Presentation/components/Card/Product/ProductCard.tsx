import { observer } from "mobx-react";
import { stringToKebabCase } from "../../../../utils/stringToKebabCase";
import { DefaultCard } from "../Default/DefaultCard";
import { ProductCardProps } from "./ProductCard.types";
import NoPhotoPlaceHolder from "../../../../assets/placeholder/card/image/no-photo.jpg";
import { useProductCardController } from "../../../Controller/Product/useProductCardController";

export const ProductCard = observer(({ products }: ProductCardProps) => {
  const {
    isShowingMore,
    handleShowMore,
    handleSeeMore,
    setHasSeeMore,
    textRef,
    hasSeeMore,
  } = useProductCardController();

  window.addEventListener("resize", () =>
    handleSeeMore(40, textRef?.current?.id, setHasSeeMore)
  );

  return (
    <div>
      {products.map((product, idx) => (
        <DefaultCard
          isShowingMore={
            isShowingMore.filter(({ id }) => id === idx)[0]?.isShowingMore
          }
          handleShowMore={handleShowMore}
          textRef={textRef}
          hasSeeMore={hasSeeMore}
          key={`sc-default-card-${idx}`}
          buttonName="comprar agora"
          cardContent={{
            imgHeight: "140",
            description: product.description?.cardDescription,
            title: product.model,
            imgAlt: product.model,
            routeName: stringToKebabCase(product.model),
            imgSrc: product.media ? product.media : NoPhotoPlaceHolder,
          }}
          className={{
            containerClass: "mt-6 px-4 sm:px-6 lg:px-10 xl:px-16 2lx:px-24",
            cardClass: "flex",
            imageClass: ` ${
              isShowingMore.filter(({ id }) => id === idx)[0]?.isShowingMore
                ? "max-h-56"
                : "max-h-36"
            }  !w-4/12 md:!w-3/12 lg:pr-6 xl:!w-2/12`,
            cardContentClass:
              "!pt-2.5 !pb-1.5 !pr-2.5 !pl-2.5 !w-8/12 md:!w-9/12 xl:!w-10/12 ",
            buttonClass:
              "!bg-sky-900 !text-white !font-semibold !px-3 !py-1.5 !rounded-lg !text-sm !sm:text-base !md:text-lg !font-body",
          }}
          index={idx}
        />
      ))}
    </div>
  );
});
