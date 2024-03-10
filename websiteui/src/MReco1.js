// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";

// function MReco1(props, fave) {
//   return (
//     <div id="reco">
//       <div className="reco-item">
//         <img src={props.mangaReco.image} alt={props.mangaReco.image}></img>
//         <span>{props.mangaReco.name}</span>

//         <div className={`fave-react ${fave.completed ? "fave!" : ""}`}>
//           <button onClick={() => ontoggle}>
//           {manga.fave ? (<FontAwesomeIcon icon={faHeart} />) : (<FontAwesomeIcon icon={faHeart} />)}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function MReco1(props) {
  const [isFavorited, setIsFavorited] = useState(true);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div id="reco">
      <div className="reco-item">
        <img src={props.mangaReco.image} alt={props.mangaReco.image} />
        <span>{props.mangaReco.name}</span>

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

export default MReco1;
