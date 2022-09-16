import React from 'react'
import Coment from '../Coment'
import AddCommentForm from '../AddCommentForm'

export default function ComentContainer({comments, add_comment, post_id}) {
  return (
    <div>
        {
            comments.map(comment => <Coment key={comment.id} {...comment}/>)
        }
        <AddCommentForm add_comment={add_comment} post_id={post_id}/>
    </div>
  )
}
