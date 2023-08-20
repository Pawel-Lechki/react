import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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

  return (
    <div>
      <pre>{JSON.stringify(model, undefined, 2)}</pre>
      <form>
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
