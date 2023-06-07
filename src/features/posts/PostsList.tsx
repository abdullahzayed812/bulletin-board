import { useAppSelector } from "../../app/hooks";
import { selectAllPosts } from "./postsSlice";

export const PostsList: React.FC = () => {
  const { posts } = useAppSelector(selectAllPosts);

  const renderedPosts = posts.map(({ id, content, title }) => (
    <article key={id}>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  ));

  return <section>{renderedPosts}</section>;
};
