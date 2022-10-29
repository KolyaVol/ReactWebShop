import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../Api/PostService'

export default function PostIdPage() {
  const params = useParams()

  let [comments, setComments] = useState([])

  const fetchComments = async (id) => {
    const response = await PostService.getCommentsByPostId(id)
    setComments(response.data)
  }
  return (
    <div>PostIdPage
      <div>
        {comments.map(comm => 
          <div>{comm.body}</div>)}
      </div>
    </div>
    
  )
}
