export const cardContents = [
  {
    imgHeight: "140",
    imgSrc: "/static/images/cards/contemplative-reptile.jpg",
    imgAlt: "green iguana",
    routeName: "/green-iguana",
    title: "Iguana verde",
    id: 1,
    description: "Uma iguana verde",
  },
  {
    imgHeight: "240",
    imgSrc: "/static/images/cards/contemplative-reptile.jpg",
    imgAlt: "red iguana",
    routeName: "/red-iguana",
    title: "Iguana vermelho",
    id: 2,
    description: null,
  },
];

export interface DefaultCardProps {
  cardContents: CardContentPropType[];
  handleClick?: () => void | Function | void;
}

export type CardContentPropType = {
  imgHeight: string;
  imgSrc: string;
  imgAlt: string;
  routeName: string | null;
  title: string | null;
  id: number | null;
  description: string | null;
};
