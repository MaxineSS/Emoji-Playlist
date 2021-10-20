import React from 'react'

const Comment = ({ comments }) => {
  return (
    <>
      {comments ? (
        <span className="comments">
          {comments.map((c,i) => <p key={i}>{c}</p>)}
        </span>
      ) : <div></div>}
    </>
  )
}

export default Comment