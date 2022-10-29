import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'


export default function PostItem(props) {
  
  return (
    <div>
      {props.post.id}. {props.post.title}
      <div>{props.post.body}
      <button onClick = {() => props.remove(props.post)}>Remove</button>
      <BrowserRouter>
        <Link to = {'/posts/' + props.post.id}>LINK</Link>
      </BrowserRouter>
    
    </div>
    </div>
  )
}
