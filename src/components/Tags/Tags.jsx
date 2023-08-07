import "./Tags.scss";
import PropTypes from "prop-types";

export default function Tags({ listeTags }) {
  return (
    <ul className="tags">
      {listeTags.map((tagItem, index) => {
        return (
          <li key={index} className="tag">
            {tagItem}
          </li>
        );
      })}
    </ul>
  );
}

Tags.propTypes = {
    listeTags: PropTypes.array
};
