import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function MReco2(props) {
  const [isFavorited, setIsFavorited] = useState(true);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <div id="reco2">
      <div className="reco-item2">
        <img src={props.mangaReco2.image} alt={props.mangaReco2.image}></img>
        <span className="span2">{props.mangaReco2.name}</span>

        <button className="react-btn" onClick={toggleFavorite}>
          <FontAwesomeIcon
            icon={isFavorited ? faHeart : faTimes}
            style={{ color: isFavorited ? "red" : "grey" }}
          />
          {isFavorited ? " Like" : " Unlike"}
        </button>
      </div>
    </div>
  );
}

export default MReco2;
