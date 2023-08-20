import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import router from "../router"

const PostForm = () => {
  const [model, setModel] = useState({
    id: "",
    title: "",
    body: "",
  })

  const params = useParams()

  useEffect(() => {
    if (!params.id) {
      return
    }
    fetch("https://jsonplaceholder.typicode.com/posts/" + params.id)
      .then((res) => res.json())
      .then((post) => setModel(post))
  }, [])

  function onSubmit(ev) {
    ev.preventDefault()

    if (model.id) {
      fetch("https://jsonplaceholder.typicode.com/posts/" + model.id, {
        method: "PUT",
        body: JSON.stringify(model),
      })
        .then((res) => res.json())
        .then((res) => {
          router.navigate("/")
        })
    } else {
      fetch("https://jsonplaceholder.typicode.com/posts/", {
        method: "POST",
        body: JSON.stringify(model.value),
      })
        .then((res) => res.json())
        .then((res) => {
          router.navigate("/")
        })
    }
  }

  return (
    <div>
      <p>
        <Link to="/" class="btn btn-outline-secondary">
          Go back to list
        </Link>
      </p>
      <pre>{JSON.stringify(model, undefined, 2)}</pre>
      <form onSubmit={onSubmit}>
        <h1>{model.id ? "Edit Post" : "Create new Post"}</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Post Title"
            value={model.title}
            onInput={(ev) => setModel({ ...model, title: ev.target.value })}
          />
        </div>
        <div className="mb-3">
          <textarea
            tyoe="text"
            className="form-control"
            placeholder="Post Body"
            value={model.body}
            onInput={(ev) => setModel({ ...model, body: ev.target.value })}
          ></textarea>
        </div>
        <p>
          <button
            className="btn btn-success"
            type="submit"
            disabled={!model.title || !model.body}
          >
            Submit
          </button>
        </p>
      </form>
    </div>
  )
}

export default PostForm
