import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { sub } from "date-fns";

interface PostItemPropType {
  id: string;
  title: string;
  content: string;
  userID?: number | string;
  date: string;
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
      date: sub(new Date(), { minutes: 10 }).toISOString(),
    },
    {
      id: "2",
      title: "Slices....",
      content: "Now i learn how to create slice and manage state of my app. ",
      date: sub(new Date(), { minutes: 5 }).toISOString(),
    },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action: PayloadAction<PostItemPropType>) {
        console.log(action.payload);
        state.posts.push(action.payload);
      },
      prepare(title: string, content: string, userID: number | string) {
        return {
          payload: {
            id: nanoid(),
            userID,
            title,
            content,
            date: new Date().toISOString(),
          },
        };
      },
    },
  },
});

export const { addPost } = postsSlice.actions;

export const selectAllPosts = (state: RootState) => state.posts;

export default postsSlice.reducer;
