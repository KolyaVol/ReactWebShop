import { useMemo } from "react";


export const useSortedPosts = (posts, sort) => {
    const sortPosts = useMemo(() => {
        if (sort) {
            return ([...posts].sort((a, b) => a-b))
        }
        return posts
    }, [sort, posts])

    return sortPosts
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(prod => prod.name.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts
}