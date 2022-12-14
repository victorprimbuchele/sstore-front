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

export interface DefaultCardPropsSingleContent extends DefaultCardProps {
  cardContent: CardContentPropType;
}

export interface DefaultCardPropsMultiContent extends DefaultCardProps {
  cardContents: CardContentPropType[];
}

export type DefaultCardProps = {
  handleClick?: () => void | Function | void;
  className?: StyleCardProps;
  buttonName: string;
  index: number;
  isShowingMore?: boolean;
  handleShowMore?: (index: number, isShowing: boolean) => void;
  textRef?: React.LegacyRef<HTMLParagraphElement>;
  hasSeeMore?: boolean;
  handleSeeMore?: () => void;
};

export type CardContentPropType = {
  imgHeight: string;
  imgSrc: string;
  imgAlt: string;
  routeName: string | null;
  title: string | null;
  id?: number | null;
  description?: string | null;
};

export type StyleCardProps = {
  containerClass?: string | null;
  cardClass?: string | null;
  imageClass?: string | null;
  cardContentClass?: string | null;
  buttonClass?: string | null;
};
