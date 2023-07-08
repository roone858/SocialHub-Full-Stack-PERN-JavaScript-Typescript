import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
export default function ListItemComponent({
  alt,
  src,
  primary,
  typography,
  text,
}:any) {
  return (
    <ListItem alignItems="flex-start" className=" m-2 bg-white border rounded">
      <ListItemAvatar>
        <Avatar alt={alt} src={src} />
      </ListItemAvatar>
      <ListItemText
        primary={primary}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {typography}
            </Typography>
            {text}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
