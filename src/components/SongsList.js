import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import SongCard from "./SongCard";
import { PLAYLIST, FAVOURITE, LISTENED } from "../constraints";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SongsList({
  title,
  songs,
  favourite,
  unfavourite,
  listened,
  unlistened,
}) {
  const classes = useStyles();
  //validSongs -> function
  const validSongs = (title, songs) => {
    if (title === PLAYLIST) {
      return songs;
    } else if (title === FAVOURITE) {
      return songs.filter((song) => {
        return song.favourite;
      });
    } else if (title === LISTENED) {
      return songs.filter((song) => {
        return song.listened;
      });
    }
  };

  return (
    <List dense className={classes.root}>
        <h1>{title}</h1>
      {validSongs(title, songs).map((song) => {
        return (
          <div>
            
            <SongCard
              song={song}
              favouriteSong={favourite}
              unfavouriteSong={unfavourite}
              listenedSong={listened}
              unlistenedSong={unlistened}
            />
          </div>
        );
      })}
    </List>
  );
}
