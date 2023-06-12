import { AddPostForm } from "./features/posts/AddPostFrom";
import { PostsList } from "./features/posts/PostsList";

function App() {
  return (
    <main>
      <h1>Add a New Post</h1>
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
