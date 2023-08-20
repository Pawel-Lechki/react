import React from "react"

const PostItem = ({ post }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  )
}

export default PostItem
