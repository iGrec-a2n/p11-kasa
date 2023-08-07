import './HousingTitle.scss'
import PropTypes from 'prop-types'

export default function HousingTitle({title, location}) {
  return (
    <div className="housing-title">
      <h2>{title}</h2>
      <h3>{location}</h3>
    </div>
  )
}

HousingTitle.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}