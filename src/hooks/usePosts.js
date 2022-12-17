import { useMemo } from "react";

export const usePosts = (prods, sort, query) => {
    

    const sortedAndSearchedPosts = useMemo(() => {
        return prods.filter(prod => prod.name.toLowerCase().includes(query.toLowerCase()))
    }, [query, prods])

    return sortedAndSearchedPosts
}