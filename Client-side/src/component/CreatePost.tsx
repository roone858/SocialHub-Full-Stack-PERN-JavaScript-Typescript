import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { pink } from "@mui/material/colors";
import "../style/createPost.css";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../app/slices/post-slice";
import Posts from "../services/posts.services";
export default function CreatePost() {
  const [content, setContent] = useState("");
  const posts = useSelector((state: any) => state.posts.data);
  const user = useSelector((state: any) => state.user.data);
  const dispatch = useDispatch();

  const handleTextarea = (e: any) => {
    setContent(e.target.value);
  };
  const handlePostButton = () => {
    const post = {
      post_id: posts.length,
      content: content,
      created_at: new Date().toString().slice(0, 25),
      user_id: 4,
    };
    const postsServices = new Posts();
    postsServices.insert(post);
    dispatch(addPost(post));
  };
  return (
    //     <div className='card '>
    // <textarea name="" id="" rows={5}></textarea>
    // <button>post</button>
    //     </div>
    <Card className="my-3 create-post" sx={{ maxWidth: 800 }}>
      {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      /> */}
      {/* <CardMedia
  component="img"
  height="194"
  image="/static/images/cards/paella.jpg"
  alt="Paella dish"
/> */}
      <CardContent>
        <textarea
          placeholder="What's on your mind ?"
          name=""
          id=""
          cols={30}
          rows={5}
          style={{ width: "100%" }}
          onChange={handleTextarea}
        ></textarea>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton
          onClick={() => console.log("sharing...")}
          aria-label="share"
        >
        </IconButton> */}
        <Button
          className="m-2"
          onClick={handlePostButton}
          variant={"contained"}
        >
          Post
        </Button>
        {/* <ExpandMore
    expand={expanded}
    onClick={handleExpandClick}
    aria-expanded={expanded}
    aria-label="show more"
  >
    <ExpandMoreIcon />
  </ExpandMore> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
  <CardContent>
    <Typography paragraph>Method:</Typography>
    <Typography paragraph>
      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
      aside for 10 minutes.
    </Typography>
    <Typography paragraph>
      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
      medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
      occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
      large plate and set aside, leaving chicken and chorizo in the pan. Add
      pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
      stirring often until thickened and fragrant, about 10 minutes. Add
      saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
    </Typography>
    <Typography paragraph>
      Add rice and stir very gently to distribute. Top with artichokes and
      peppers, and cook without stirring, until most of the liquid is absorbed,
      15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
      mussels, tucking them down into the rice, and cook again without
      stirring, until mussels have opened and rice is just tender, 5 to 7
      minutes more. (Discard any mussels that don&apos;t open.)
    </Typography>
    <Typography>
      Set aside off of the heat to let rest for 10 minutes, and then serve.
    </Typography>
  </CardContent>
</Collapse> */}
    </Card>
  );
}
