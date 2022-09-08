import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addToPlaylist } from "../../actions";
import { useDispatch } from "react-redux";

// receives a single song as a prop
// needs to get addToPlaylist Function from addToPlaylistReducer or something
const AddToPlayList = ({ id, title, artist, album, albumArtUrl }) => {
  const dispatch = useDispatch();
  const [toggleHeart, setToggleHeart] = useState(false);

  const changeIcon = () => {
    setToggleHeart(!toggleHeart);
  };
  const handleAddSong = () => {
    dispatch(addToPlaylist({ id, title, artist, album, albumArtUrl }));
    changeIcon();
  };
  return (
    <section>
      <button
        type="button"
        className="playlist-btn add"
        onClick={handleAddSong}
      >
        {toggleHeart ? (
          <>
            <FaHeart /> <span>Saved</span>
          </>
        ) : (
          <>
            <FaRegHeart /> <span>Save</span>
          </>
        )}
      </button>
    </section>
  );
};

export default AddToPlayList;
