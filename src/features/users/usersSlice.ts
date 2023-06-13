import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface User {
  id: number;
  name: string;
}

interface InitialState {
  users: User[];
}

const initialState: InitialState = {
  users: [
    { id: 0, name: "Abdullah Zayed" },
    { id: 1, name: "Hamza Abdullah" },
    { id: 2, name: "Hajar Ibrahem" },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
