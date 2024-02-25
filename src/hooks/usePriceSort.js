import { useMemo } from "react";

export const usePriceSort = (prods) => {
  const sortPosts = useMemo(() => {
    return [...prods].sort((a, b) => a.price - b.price);
  }, [prods]);

  return sortPosts;
};
