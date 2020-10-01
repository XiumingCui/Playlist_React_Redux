import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HeadsetIcon from "@material-ui/icons/Headset";
import HeadsetMicOutlinedIcon from "@material-ui/icons/HeadsetMicOutlined";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

export default function SongCard({
  song,
  favouriteSong,
  unfavouriteSong,
  listenedSong,
  unlistenedSong,
}) {
  return (
    <React.Fragment>
      <ListItem key={song.id}>
        <ListItemText primary={song.track} secondary={song.artist} />
        <ListItemSecondaryAction>
          {song.favourite ? (
            <FavoriteIcon
              className="ui button primary"
              onClick={() => unfavouriteSong(song.id)}
            />
          ) : (
            <FavoriteBorderIcon
              className="ui button primary"
              onClick={() => favouriteSong(song.id)}
            />
          )}
          {song.listened ? (
            <HeadsetIcon
              className="ui button primary"
              onClick={() => unlistenedSong(song.id)}
            />
          ) : (
            <HeadsetMicOutlinedIcon
              className="ui button primary"
              onClick={() => listenedSong(song.id)}
            />
          )}
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
}
