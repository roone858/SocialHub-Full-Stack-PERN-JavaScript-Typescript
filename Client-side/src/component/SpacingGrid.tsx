import * as React from "react";
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
import { useSelector } from "react-redux";
import { User } from "../types";

export default function SpacingGrid() {
  const friends = useSelector((state: any) => state.friends.data);

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={5}>
          {friends.map((friend:User) => (
            <Grid key={friend.user_id} item>
              <Paper
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <Card
                  sx={{ maxWidth: 345 }}
                  className="d-flex p-2 align-items-center flex-column"
                >
                  <CardHeader
                    avatar={
                      <Avatar
                        alt="Remy Sharp"
                        src={avatar1}
                        sx={{ width: 150, height: 150 }}
                      />
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
                      {friend.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     {friend.bio}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button color="error" variant={"contained"} size="small">
                      Delete
                    </Button>
                    <Button color={"success"} variant={"outlined"} size="small">
                      Visit profile
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
