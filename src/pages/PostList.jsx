import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PostItem from "../components/PostItem"

const PostList = () => {
  const [postList, setPostList] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => setPostList(posts))
  }, [])

  function onDelete(post) {
    setPostList(postList.filter((p) => p.id != post.id))
  }

  return (
    <>
      <p>
        <Link to="/new" className="btn btn-success">
          Add new
        </Link>
      </p>
      <div>
        {/* <pre>{JSON.stringify(postList, undefined, 2)}</pre> */}
        {postList.map((post) => (
          <PostItem key={post.id} post={post} onDelete={onDelete} />
        ))}
      </div>{" "}
    </>
  )
}

export default PostList
