import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SimpleToggleButton } from "../../Button/Toggle/Simple/SimpleToggleButton";
import { CardContentPropType, DefaultCardProps } from "./DefaultCard.types";

export const DefaultCard = ({
  cardContents,
  handleClick,
}: DefaultCardProps) => {
  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(route);
  };

  const myCard = (cardContent: CardContentPropType, idx: number) => (
    <div className='px-1.5 mb-7'>
      <Card key={`sc-key-card-${idx}`} id={`sc-id-card-${idx}`}>
        <CardMedia
          component="img"
          height={cardContent.imgHeight}
          image={cardContent.imgSrc}
          alt={cardContent.imgAlt}
        />
        <CardContent>
          <h3 className="font-brand text-base sm:text:lg">
            {cardContent.title}
          </h3>
          <p className="mt-2 font-body text-xs sm:text:sm">
            {cardContent.description}
          </p>
        </CardContent>
        <CardActions>
          <SimpleToggleButton
            buttonName="Ver mais"
            onClick={
              handleClick
                ? handleClick
                : () =>
                    handleNavigate(
                      cardContent.routeName ? cardContent.routeName : "/"
                    )
            }
          />

          {/* <SimpleToggleButton buttonName="Comprar"  size="small"></SimpleToggleButton> */}
        </CardActions>
      </Card>
    </div>
  );

  return cardContents.map((cardContent, index) => myCard(cardContent, index));
};
