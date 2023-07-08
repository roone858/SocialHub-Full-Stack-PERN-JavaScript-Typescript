import * as React from "react";
import { memo, useRef, useCallback } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { pink } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { Like } from "../../types";
import { addLike, deleteLike } from "../../app/slices/like-slice";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
function FavoriteCheckBox({ post_id }: any) {
//   const dispatch = useDispatch();
//   const user = useSelector((state: any) => state.user.data);

//   const likes = useSelector((state: any) => state.likes.data);
//   const userLikes = likes.filter((like: Like) => like.user_id === user.user_id);
//   const like = userLikes.find((lik: Like) => lik.post_id === post_id);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleCkeckboxChange = useCallback(() => {
    setIsFavorite(!isFavorite);
//     if (!isFavorite)
//       dispatch(
//         addLike({
//           like_id: likes.length + 1,
//           post_id: post_id,
//           user_id: user.user_id,
//           created_at: new Date().toString().slice(0, 25),
//         })
//       );
//     else dispatch(deleteLike(like.like_id));
  }, [isFavorite]);

  console.log("Hello from checkbox..."+post_id);
  return (
    <Checkbox
      {...label}
      checked={isFavorite}
      onChange={()=>setIsFavorite(!isFavorite)}
      icon={<FavoriteBorder />}
      checkedIcon={<Favorite />}
      sx={{
        color: pink[800],
        "&.Mui-checked": {
          color: pink[600],
        },
      }}
    />
  );
}

export default FavoriteCheckBox;
