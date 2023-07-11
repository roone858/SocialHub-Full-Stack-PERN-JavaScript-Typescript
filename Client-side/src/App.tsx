import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./layouts/SideBar";

import Home from "./Pages/Home";
import NavBar from "./layouts/NavBar";
import Friends from "./Pages/Frindes";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import { fetchPosts } from "./app/slices/post-slice";
import { useDispatch, useSelector } from "react-redux";
import { fetchLikes } from "./app/slices/like-slice";
import { fetchUser } from "./app/slices/user-slice";
import { fetchFriends } from "./app/slices/friend-slice";
import SignIn from "./Pages/SignIn";

function App() {
  // const dispatch = useDispatch();
  // const user = useSelector((state: any) => state.user.data);
  // dispatch(fetchPosts());
  // dispatch(fetchLikes());
  // dispatch(fetchUser());
  // dispatch(fetchFriends());
  // // if (!user) return <SignIn />;
  return (
    <div className="App ">
      <>
        <BrowserRouter>
          <Sidebar />
          <NavBar />
          <div className="home-section py-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/feeds" element={<Home />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
