import React from 'react'
import Post from '../Post'

export default function PostContainer({posts, change_like, add_comment}) {
  return (
    <div>
        {
            posts.map(post => <Post key={post.id}
               {...post} change_like={change_like} add_comment={add_comment}/> )
        }
    </div>
  )
}
