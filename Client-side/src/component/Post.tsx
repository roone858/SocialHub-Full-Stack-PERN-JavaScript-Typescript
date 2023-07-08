import { red } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { PostType, User } from "../types";
import FavoriteCheckBox from "./Buttons/FavoriteCheckBox";
import {
  Share as ShareIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";

function Post({ user_id, content, created_at, post_id }: PostType) {
  const friend = useSelector((state: any) =>
    [...state.friends.data, state.user.data].find(
      (f: User) => f.user_id === user_id
    )
  );
  if (!friend) return <></>;
  return (
    <Card className="my-3" sx={{ maxWidth: 800 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {friend ? friend.name[0] : "n"}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={friend?.name}
        subheader={created_at}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteCheckBox post_id={post_id} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
export default Post;
