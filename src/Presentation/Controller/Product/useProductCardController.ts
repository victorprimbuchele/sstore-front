import { useRef, useState } from "react";
import { ProductModel } from "../../../Data/Products/ProductModel";
import { verifyInnerTextHeightIsGreaterThanMaxHeight } from "../../../utils/verifyInnerTextHeightIsGreaterThanMaxHeight";

export const useProductCardController = (products: ProductModel[]) => {
  const [hasSeeMore, setHasSeeMore] = useState(false);
  const [isShowingMore, setIsShowingMore] = useState([
    {
      id: 0,
      isShowingMore: false,
    },
  ]);
  const textRef = useRef<HTMLParagraphElement>(null);

  const handleSeeMore = (
    maxHeight: number,
    index: string | undefined,
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (index) {
      setter(verifyInnerTextHeightIsGreaterThanMaxHeight(maxHeight, index));
    }
  };

  const handleShowMore = (index: number, isShowing: boolean) => {
    setIsShowingMore((prevState) =>
      prevState.map(({ id }) => {
        if (index === id) {
          return { id, isShowingMore: isShowing };
        } else {
          return {
            id: index,
            isShowingMore: isShowing,
          };
        }
      })
    );
  };

  return {
    isShowingMore,
    handleShowMore,
    handleSeeMore,
    setHasSeeMore,
    textRef,
    hasSeeMore,
  };
};
