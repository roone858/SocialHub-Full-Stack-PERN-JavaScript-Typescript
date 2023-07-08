import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice';

// import teachersSlice from './slice/teacher-slice';
// import loginSlice from './slice/login-slice';
// import subjectSlice from './slice/subject-slice ';
// import classesSlice from './slice/class-slice ';
// import attendanceSlice from './slice/attendance-slice';
// import notificationsSlice from './slice/notifications-slice';
// import teachingSlice from './slice/teaching-slice';
// import sessionsSlice from './slice/session-slice ';
// import TimetablesSlice from './slice/timetable-slice';
import friendsSlice from "./slices/friend-slice";
import likesSlice from "./slices/like-slice";
import postsSlice from "./slices/post-slice";
import userSlice from "./slices/user-slice";
export const store = configureStore({
  reducer: {
    friends: friendsSlice,
    likes: likesSlice,
    posts: postsSlice,
    user: userSlice,
    // teachers: teachersSlice,
    // subjects: subjectSlice,
    // classes: classesSlice,
    // teaching: teachingSlice,
    // timetables: TimetablesSlice,
    // sessions: sessionsSlice,
    // login: loginSlice,
    // attendance: attendanceSlice,
    // notification: notificationsSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
