import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostType } from "../../types";
import Posts from "../../services/posts.services";
// import { Student } from '../../types/type';

// import studentService from '../../services/student.service';

// // Define the async thunk for fetching data from the student route
export const fetchPosts: any = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const postsService = new Posts();
    const response = postsService.getAllPosts();
    return response;
  }
);
const initialState = {
  data: [] as PostType[],
  isLoading: false,
  error: null,
};
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostType>) => {
      state.data.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        data: state.data.filter(
          (post: PostType) => post.post_id !== action.payload
        ),
      };
    },
  },
  extraReducers: (builder) => {
    // Add reducers for handling the fetchStudents action
    // builder.addCase(fetchStudents.pending, (state) => {
    //   state.status = 'loading';
    // });
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return { ...state, data: action.payload, isLoading: false };
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      return { ...state, error: action.payload.error };
    });
  },
});

export const { addPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
