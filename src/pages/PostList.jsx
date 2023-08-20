import React from "react"
import { useEffect, useState } from "react"

const PostList = () => {
  const [postList, setPostList] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => setPostList(posts))
  }, [])
  return (
    <div>
      <pre>{JSON.stringify(postList, undefined, 2)}</pre>
    </div>
  )
}

export default PostList
