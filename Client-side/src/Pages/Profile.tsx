import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
// import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Paper from "@mui/material/Paper";
import { Avatar, Card } from "@mui/material";
import avatar1 from "../static/1.jpg";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import "../style/profile.css";
import PostFeed from "../component/PostFeed";
import Post from "../component/Post";
import { useSelector } from "react-redux";
import { PostType } from "../types";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function Profile() {
  const user = useSelector((state: any) => state.user.data);
  const postsOfUser = useSelector((state: any) =>
    state.posts.data.filter((post: PostType) => post.user_id === user.user_id)
  );

  if (!user) return <></>;
  return (
    <div className="profile my-4  bg-white">
      <div className="cover w-100"></div>
      <div className="container d-flex flex-column  align-items-center">
        <div className="header p-0 m-0">
          <Card
            sx={{
              maxWidth: 500,
              backgroundColor: "transparent ",
              border: "0px",
              boxShadow: "none",
              left: "50%",
            }}
            className="d-flex p-0 m-0 align-items-center flex-column"
          >
            <CardHeader
              avatar={
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={avatar1}
                    sx={{ width: 150, height: 150 }}
                  />
                </StyledBadge>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              // title="Shrimp and Chorizo Paella"
              // subheader="September 14, 2016"
            />
            <CardContent>
              <Typography
                className="d-flex  justify-content-center"
                gutterBottom
                variant="h5"
                component="div"
              >
                {user?.name}
              </Typography>
              <Typography
                className="text-center"
                variant={"body1"}
                color="text.secondary"
              >
                {"@" + user?.username}
              </Typography>
              <Typography
                className="text-center py-3 d-flex"
                variant={"body2"}
                color="text.secondary"
              >
                <span className="m-0">
                  {" "}
                  <LocationOnIcon />
                  {user.address}
                </span>
                <span className="my-0 " style={{ marginLeft: "2rem" }}>
                  {" "}
                  <CalendarMonthIcon /> Joined Nov 2020
                </span>
              </Typography>
            </CardContent>
            <CardActions>
              <div className="posts text-center">
                <b className="m-0">10</b>
                <p className="m-0 text-secondary">posts</p>
              </div>
              <div
                style={{ marginLeft: "2rem" }}
                className="friends text-center"
              >
                <b className="m-0">24</b>

                <p className="m-0 text-secondary">friends</p>
              </div>
            </CardActions>
          </Card>
        </div>
        <div
          style={{ maxWidth: "700px" }}
          className="bio text-center text-secondary p-2"
        >
          {user.bio}
        </div>
      </div>
      <div
        style={{ backgroundColor: "rgb(230, 230, 230)" }}
        className="posts  px-2 py-5  d-flex flex-column justify-content-center align-items-center"
      >
        {postsOfUser?.map((post: PostType, index: number) => (
          <Post
            key={index}
            user_id={post?.user_id}
            content={post?.content}
            created_at={post?.created_at}
            post_id={post?.post_id}
          />
        ))}
      </div>
    </div>
  );
}
