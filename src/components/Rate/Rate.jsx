import './Rate.scss'
import PropTypes from 'prop-types'

import { ReactComponent as FilledStar } from '../../assets/icons/star-filled.svg'
import { ReactComponent as EmptyStar } from '../../assets/icons/star-empty.svg'


export default function Rate({rating}) {
  return (
    <ul className="rate">
      {[...Array(5)].map((star, index) => {
        return (
          <li key={`star${index}`}>
            {index < rating ? <FilledStar/> : <EmptyStar/>}
          </li>
        )
        
      })}
    </ul>
  )
}

Rate.propTypes = {
  rating: PropTypes.number.isRequired
}