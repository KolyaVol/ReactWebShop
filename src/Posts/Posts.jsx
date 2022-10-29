import React, { useEffect, useState } from 'react'
import MyInput from '../UI/MyInput/MyInput';
import PostService from '../Api/PostService';
import MySelect from '../UI/MySelect/MySelect';
import PostList from './PostList';
import { usePosts } from '../hooks/usePosts';
import getPageCount, { getPagesArray } from '../pages';
import { Link, Router } from 'react-router-dom';
export default function Posts() {

    let [ posts, setPosts] = useState([])
    let [selectedSort, setSelectedSort] = useState('')
    let [filter, setFilter] = useState({sort: '', query: ''})
    let [totalPages, setTotalPages] = useState(0)
    let [limit, setLimit] = useState(10)
    let [page, setPage] = useState(1)

    let pagesArray = getPagesArray(totalPages)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


    async function fetchPosts() {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  }


  console.log(totalPages);
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }   
  console.log(pagesArray);
  useEffect(() => {
    fetchPosts()
   
  }, [page])

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }





  return (
    <div>

      
      <MySelect
        value = {selectedSort}
        onChange = {sortPosts}
        defaultValue = 'Sort'
        options = {[
          {value: 'title', name: 'by title'},
          {value: 'body', name: 'by body'},
        ]}
      />

      <MyInput
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder="Search..."
      />
      <PostList remove = {removePost} posts = {sortedAndSearchedPosts}/>
        {pagesArray.map (p => 
          <button key={p} onClick={() => setPage(p)}>{p}</button>)}
          
    </div>
  )
}
