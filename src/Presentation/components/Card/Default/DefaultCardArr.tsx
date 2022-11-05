import { DefaultCard } from "./DefaultCard";
import { DefaultCardPropsMultiContent } from "./DefaultCard.types";

export const DefaulCardArr = ({
  cardContents,
  handleClick,
  className,
}: DefaultCardPropsMultiContent) => {
  return cardContents.map((cardContent, index) => (
    <DefaultCard
    buttonName='ver mais'
      cardContent={cardContent}
      index={index}
      className={className}
      handleClick={handleClick}
    />
  ));
};
