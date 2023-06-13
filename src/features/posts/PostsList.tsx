import { useAppSelector } from "../../app/hooks";
import { PostAuthor } from "./PostAuthor";
import { selectAllPosts } from "./postsSlice";

export const PostsList: React.FC = () => {
  const { posts } = useAppSelector(selectAllPosts);

  const renderedPosts = posts.map(({ id, content, title, userID }) => (
    <article key={id}>
      <h2>{title}</h2>
      <p>{content}</p>
      <PostAuthor userID={userID} />
    </article>
  ));

  return <section>{renderedPosts}</section>;
};
