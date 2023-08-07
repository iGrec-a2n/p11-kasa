import "./Thumbnail.scss";

import { Link } from "react-router-dom";

export default function Thumbnail({ id, title, cover }) {
  return (
    <li key={id} className="thumbnail">
      <Link to={`/housing/${id}`}>
        <img src={cover} alt={title} />
        <h3>{title}</h3>
      </Link>
    </li>
  );
}
