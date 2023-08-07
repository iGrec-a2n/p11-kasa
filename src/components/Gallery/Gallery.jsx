import "./Gallery.scss";
import PropTypes from 'prop-types'

import Thumbnail from "../Thumbnail/Thumbnail";

export default function Gallery({ housings }) {
  return (
    <ul className="gallery">
      {housings.map((housing, index) => {
        return <Thumbnail key={index} {...housing} />;
      })}
    </ul>
  );
}

Gallery.propTypes = {
    housings: PropTypes.array.isRequired
}