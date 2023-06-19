import { useAppSelector } from "../../app/hooks";
import { PostAuthor } from "./PostAuthor";
import { selectAllPosts } from "./postsSlice";
import { TimeAgo } from "./TimeAgo";

export const PostsList: React.FC = () => {
  const { posts } = useAppSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map(
    ({ id, content, title, userID, date }) => (
      <article key={id}>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>
          <PostAuthor userID={userID} />
          <TimeAgo timestamp={date} />
        </p>
      </article>
    )
  );

  return <section>{renderedPosts}</section>;
};
