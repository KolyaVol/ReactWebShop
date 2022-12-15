import { useMemo } from "react";


export const usePriceSort = (prods) => {
    const sortPosts = useMemo(() => {
        if (1) {
            return ([...prods].sort((a, b) => a.price-b.price))
        }
        return prods
    }, [prods])

    return sortPosts
}
