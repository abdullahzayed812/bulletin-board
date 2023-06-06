import { createSlice } from "@reduxjs/toolkit";

interface PostItemPropType {
  id: number | undefined;
  title: string;
  content: string;
}

interface InitialState {
  posts: PostItemPropType[];
}

const initialState: InitialState = {
  posts: [
    {
      id: 1,
      title: "Learning Redux Toolkit",
      content:
        "I love heard good things about javascript programming language and their frameworks. ",
    },
    {
      id: 2,
      title: "Slices....",
      content: "Now i learn how to create slice and manage state of my app. ",
    },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});
