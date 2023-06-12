import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import { useAppDispatch } from "../../app/hooks";
import { addPost } from "./postsSlice";

export const AddPostForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  const canSave = Boolean(title) && Boolean(content);

  const onSaveButtonClicked = () => {
    if (canSave) {
      dispatch(addPost(title, content));
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="input-container">
        <label htmlFor="title">Post Title:</label>
        <input type="text" id="title" value={title} onChange={onTitleChange} />
      </div>
      <div className="input-container">
        <label htmlFor="content">Post Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={onContentChange}
        ></textarea>
      </div>
      <button type="button" onClick={onSaveButtonClicked}>
        Save
      </button>
    </form>
  );
};
