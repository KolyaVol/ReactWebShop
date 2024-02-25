import { useMemo } from "react";


export const useNameSort = (prods) => {
    const sortPosts = useMemo(() => {   
            return ([...prods].sort((a, b) => a.name.localeCompare(b.name)))
        
    }, [prods])

    return sortPosts
}
