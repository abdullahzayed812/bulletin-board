import React, { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

export const AddPostForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const { users } = useAppSelector(selectAllUsers);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [userID, setUserID] = useState<number | string>("");

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);
  const onAuthorChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setUserID(e.target.value);

  const canSave = Boolean(title) && Boolean(content) && Boolean(userID);

  const onSaveButtonClicked = () => {
    if (canSave) {
      dispatch(addPost(title, content, +userID));
    }
    setTitle("");
    setContent("");
    setUserID("");
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="input-container">
        <label htmlFor="title">Post Title:</label>
        <input type="text" id="title" value={title} onChange={onTitleChange} />
      </div>
      <div className="input-container">
        <label htmlFor="author">Author: </label>
        <select id="author" value={userID} onChange={onAuthorChange}>
          <option value=""></option>
          {usersOptions}
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="content">Post Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={onContentChange}
        ></textarea>
      </div>
      <button type="button" onClick={onSaveButtonClicked} disabled={!canSave}>
        Save
      </button>
    </form>
  );
};
