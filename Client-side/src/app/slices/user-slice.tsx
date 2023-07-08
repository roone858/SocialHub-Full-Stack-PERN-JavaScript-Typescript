import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";
// import { Student } from '../../types/type';

// import studentService from '../../services/student.service';

// Define the async thunk for fetching data from the student route
export const fetchUser: any = createAsyncThunk("user/fetchUser", () => {
  return {
    user_id: 1,
    name: "Mahmoud Gamal",
    address: "Asyut, Asyut, Egypt",
    username: "Roone858",
    email: " Roone858@gmail.com",
    bio: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  };
});
const initialState = {
  data: {} as User,
  isLoading: false,
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for handling the fetchStudents action
    // builder.addCase(fetchStudents.pending, (state) => {
    //   state.status = 'loading';
    // });
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      return { ...state, data: action.payload, isLoading: false };
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      return { ...state, error: action.payload.error };
    });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
