import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";
// import { Student } from '../../types/type';

// import studentService from '../../services/student.service';

// Define the async thunk for fetching data from the student route
export const fetchFriends: any = createAsyncThunk(
  'friends/fetchFriends',
   () => {
    // const response = await studentService.getStudents();
    return [{
      user_id: 1,
      name: "Mahmoud Gamal",
      address: "Asyut, Asyut, Egypt",
      username: "Roone858",
      email: " Roone858@gmail.com",
    },{
      user_id: 2,
      name: "Abdel Rahman",
      address: "Asyut, Asyut, Egypt",
      username: "Roone858",
      email:" Roone858@gmail.com",
     
    },{
      user_id: 3,
      name: "Moaz Sedqy",
      address: "Asyut, Asyut, Egypt",
      username: "Roone858",
      email:" moaz@gmail.com",
     
    },{
      user_id: 4,
      name: "Alaa Mostafa",
      address: "Asyut, Asyut, Egypt",
      username: "alaa_mostafa",
      email:" alaa@gmail.com",
     
    },{
      user_id: 5,
      name: "Mohamed Bakr",
      address: "Asyut, Asyut, Egypt",
      username: "mahmoud_Baker",
      email:" bakr@gmail.com",
     
    }];
  },
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

export const { addFriend,  deleteFriend } = friendsSlice.actions;
export default friendsSlice.reducer;
