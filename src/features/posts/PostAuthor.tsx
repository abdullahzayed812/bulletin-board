import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectAllUsers } from "../users/usersSlice";

interface Props {
  userID?: number | string;
}

export const PostAuthor: React.FC<Props> = ({ userID }) => {
  const { users } = useAppSelector(selectAllUsers);

  const author = users.find((user) => user.id === userID);

  return <p>By {author ? author.name : "Unknown Author"}</p>;
};
