import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";
import Users from "../../services/users.services";

// Define the async thunk for fetching data from the student route
export const fetchFriends: any = createAsyncThunk(
  "friends/fetchFriends",
  async () => {
    const usersService = new Users();
    const response = await usersService.getAll();
    return response;
  }
);
const initialState = {
  data: [] as User[],
  isLoading: false,
  error: null,
};
const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    addFriend: (state, action: PayloadAction<User>) => {
      state.data.push(action.payload);
    },
    deleteFriend: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        data: state.data.filter(
          (friend: User) => friend.user_id !== action.payload
        ),
      };
    },
  },
  extraReducers: (builder) => {
    // Add reducers for handling the fetchStudents action
    // builder.addCase(fetchStudents.pending, (state) => {
    //   state.status = 'loading';
    // });
    builder.addCase(fetchFriends.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFriends.fulfilled, (state, action) => {
      return { ...state, data: action.payload, isLoading: false };
    });
    builder.addCase(fetchFriends.rejected, (state, action) => {
      return { ...state, error: action.payload.error };
    });
  },
});

export const { addFriend, deleteFriend } = friendsSlice.actions;
export default friendsSlice.reducer;
