import './BtnCarousel.scss'
import PropTypes from 'prop-types'

import { ReactComponent as LeftIcon } from '../../assets/icons/chevron-left.svg'
import { ReactComponent as RightIcon } from '../../assets/icons/chevron-right.svg'

export default function BtnCarousel({changeImg, direction}) {
    return (
        <button
            onClick={changeImg}
            aria-label={direction === "next" ? "image suivante" : "image précédente"}
            className={direction === "next" ? "carousel-btn next" : "carousel-btn prev"}>
            {direction === "next" ? <RightIcon/> : <LeftIcon />}
        </button>
    )
}

BtnCarousel.propTypes = {
    changeImg: PropTypes.func.isRequired,
    direction: PropTypes.string
}