import Navigation from "../layouts/navigation.layouts"
import CollectionPosts from "./collection.posts"

const MainPosts = ({ postsActive }) => {
  return (
    <div>
      <Navigation postsActive={postsActive} />

      <CollectionPosts />
    </div>
  )
}

export default MainPosts
