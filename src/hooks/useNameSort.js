import { useMemo } from "react";


export const useNameSort = (prods) => {
    const sortPosts = useMemo(() => {
        if (1) {
            return ([...prods].sort((a, b) => a.name.localeCompare(b.name)))
        }
        return prods
    }, [prods])

    return sortPosts
}
