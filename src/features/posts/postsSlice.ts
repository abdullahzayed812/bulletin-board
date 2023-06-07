import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface PostItemPropType {
  id: string;
  title: string;
  content: string;
}

interface InitialState {
  posts: PostItemPropType[];
}

const initialState: InitialState = {
  posts: [
    {
      id: "1",
      title: "Learning Redux Toolkit",
      content:
        "I love heard good things about javascript programming language and their frameworks. ",
    },
    {
      id: "2",
      title: "Slices....",
      content: "Now i learn how to create slice and manage state of my app. ",
    },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action: PayloadAction<PostItemPropType>) {
        state.posts.push(action.payload);
      },
      prepare(title: string, content: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const { addPost } = postsSlice.actions;

export const selectAllPosts = (state: RootState) => state.posts;

export default postsSlice.reducer;
