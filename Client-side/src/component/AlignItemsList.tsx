import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ListItemComponent from "./ListItem";

export default function AlignItemsList({ items }: any) {
  return (
    <List sx={{ width: "100%", maxWidth: 700, bgcolor: "none" }}>
      {items?.map((item: any, index: number) => (
        <div key={index}>
          <ListItemComponent
            primary={item.primary}
            src={item.src}
            alt={item.alt}
            typography={item.typography}
            text={item.text}
          />
          {/* {index + 1 !== items.length && (
            <Divider variant="inset" component="li" />
          )} */}
        </div>
      ))}
    </List>
  );
}
