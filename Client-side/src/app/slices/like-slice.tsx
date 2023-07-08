import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Like } from "../../types";
// import { Student } from '../../types/type';

// import studentService from '../../services/student.service';

// Define the async thunk for fetching data from the student route
export const fetchLikes:any = createAsyncThunk("likes/fetchLikes", () => {
  // const response = await studentService.getStudents();
  return [
    {
      like_id: 3,
      post_id:1,
      user_id: 1,
      created_at: "Nov 20, 2023",
    },
    {
      like_id: 2,
      post_id: 2,
      user_id: 1,
      created_at: "Nov 22, 2023",
    },
    {
      like_id: 1,
      post_id:3,
      user_id: 2,
      created_at: "Nov 21, 2023",
    },
  ];
});
const initialState = {
  data: [] as Like[],
  isLoading: false,
  error: null,
};
const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    addLike: (state, action: PayloadAction<Like>) => {
      state.data.push(action.payload);
    },
    deleteLike: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        data: state.data.filter(
          (like: Like) => like.like_id !== action.payload
        ),
      };
    },
  },
    extraReducers: (builder) => {
      // Add reducers for handling the fetchStudents action
      // builder.addCase(fetchStudents.pending, (state) => {
      //   state.status = 'loading';
      // });
      builder.addCase(fetchLikes.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(fetchLikes.fulfilled, (state, action) => {
        return { ...state, data: action.payload, isLoading: false };
      });
      builder.addCase(fetchLikes.rejected, (state, action) => {
        return { ...state, error: action.payload.error };
      });
    },
});

export const { addLike, deleteLike } = likesSlice.actions;
export default likesSlice.reducer;
