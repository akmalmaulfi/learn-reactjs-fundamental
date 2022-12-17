// parent component
import MainAlbums from "./components/albums/main.albums"
import MainLayouts from "./components/layouts/main.layouts"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainPosts from "./components/Posts/main.posts"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayouts />}></Route>
          <Route
            path="/albums"
            element={<MainAlbums albumActive="active" />}
          ></Route>
          <Route
            path="/posts"
            element={<MainPosts postsActive="active" />}
          ></Route>
          <Route path="*" element={<h1>4040 NOT FOUND</h1>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
