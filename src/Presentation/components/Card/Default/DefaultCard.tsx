import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SimpleToggleButton } from "../../Button/Toggle/Simple/SimpleToggleButton";
import { DefaultCardPropsSingleContent } from "./DefaultCard.types";

export const DefaultCard: React.FC<DefaultCardPropsSingleContent> = ({
  cardContent,
  handleClick,
  className,
  buttonName,
  index,
  isShowingMore,
  handleShowMore,
  textRef,
  hasSeeMore,
}: DefaultCardPropsSingleContent) => {
  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(route);
  };

  return (
    <div
      className={`px-1.5 mb-7 ${className?.containerClass}`}
      key={`sc-container-key-card-${index}`}
      id={`sc-container-id-card-${index}`}
    >
      <Card
        key={`sc-key-card-${index}`}
        id={`sc-id-card-${index}`}
        className={`${className?.cardClass}`}
      >
        <CardMedia
          className={`${className?.imageClass}`}
          component="img"
          height={cardContent.imgHeight}
          image={cardContent.imgSrc}
          alt={cardContent.imgAlt}
        />
        <CardContent className={`${className?.cardContentClass}`}>
          <h3 className="font-brand text-base sm:text:lg ">
            {cardContent.title}
          </h3>
          <p
            ref={textRef}
            className={`mt-2 font-body text-xs sm:text:sm ${
              isShowingMore ? "max-h-18" : "truncate-overflow"
            }`}
            id={`sc-content-card-desc-${index}`}
          >
            {cardContent.description}
          </p>
          {hasSeeMore ? (
            <SimpleToggleButton
              buttonName={isShowingMore ? "Ver menos" : "Ver mais"}
              onClick={handleShowMore ? () => handleShowMore(index, !isShowingMore) : () => {}}
            />
          ) : null}
          <CardActions className="!p-0 !py-1">
            <SimpleToggleButton
              className={`${className?.buttonClass}`}
              buttonName={buttonName}
              onClick={
                handleClick
                  ? handleClick
                  : () =>
                      handleNavigate(
                        cardContent.routeName ? cardContent.routeName : "/"
                      )
              }
            />
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};
