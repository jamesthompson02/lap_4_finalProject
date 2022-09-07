import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

// receives a single song as a prop
// needs to get addToPlaylist Function from addToPlaylistReducer or something
const AddToPlaylist = () => {
  const [toggleHeart, setToggleHeart] = useState(false);
  //   const { _id, colors = [] } = singleSong;
  //   const { addToCart } = useCartContext();
  //   const [mainColor, setMainColor] = useState(colors[0]);
  //   const [amount, setAmount] = useState(1);

  const changeIcon = () => {
    setToggleHeart(!toggleHeart);
  };
  const handleAddSong = () => {
    // put the addToCart function
    // put changeIcon
    changeIcon();
  };
  return (
    <section className="cart-section">
      <Link to="/cart" className="btn" onClick={handleAddSong}>
        {toggleHeart ? <FaRegHeart /> : <FaHeart />}
      </Link>
    </section>
  );
};

export default AddToPlaylist;
