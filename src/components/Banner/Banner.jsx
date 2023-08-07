import './Banner.scss'
import PropTypes from 'prop-types'

export default function Banner({text, img, alt}) {
    const bannerText = text

    return (
    <div className='banner' tabIndex="0">
        <img src={img} alt={alt} />
        {bannerText ? <h1 className='title'>{bannerText}</h1> : ""}
    </div>
    )
}

Banner.propTypes = {
    text: PropTypes.string,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string
}