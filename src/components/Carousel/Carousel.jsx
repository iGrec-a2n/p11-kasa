import { useState } from 'react'
import PropTypes from 'prop-types'

import './Carousel.scss'
import BtnCarousel from './BtnCarousel'


export default function Carousel({images, description}) {

  const [currentImg, setCurrentImg] = useState({
    index: 1
  })

  const nextImg = () => {
      // navigation dans les images suivante
    if (currentImg.index !== images.length) {
      setCurrentImg({index: currentImg.index +1})

      // si dernière image, retour au début
    } else if (currentImg.index === images.length){
      setCurrentImg({index: 1})
    }
  }

  const prevImg = () => {
    // navigation dans les images précédentes
    if (currentImg.index !== 1) {
      setCurrentImg({index: currentImg.index -1})
    // si première image, passer à la dernière
    } else if (currentImg.index === 1){
      setCurrentImg({index: images.length})
    }
  }

  if (images.length > 1) {
  // si plusieurs images dans le carrousel
    return (
      <div className="carousel" aria-label="carousel">
  
        {/* affichage des images */}
        <div className="medias">
          {images.map((item, index)=> {
            return (
              <img
                key={item}
                aria-hidden={currentImg.index === index +1 ? "false" : "true"}
                className="medias-item"
                src={item}
                alt={description}
                aria-label={`${currentImg.index} / ${images.length}`}
              />
            )
          })}
        </div>
        
        <div className="carousel-controls">
          <BtnCarousel changeImg={prevImg} direction={"prev"}/>
          <BtnCarousel changeImg={nextImg} direction={"next"}/>
        </div>
  
        <span className="currentImgCount" tabIndex="0">{`${currentImg.index} / ${images.length}`}</span>k
  
      </div>
    )
  } else {
    // si une seule image dans le carrousel
    return (
      <div className="carousel" aria-label="carousel">
        <div className="medias">
              <img
                className="medias-item"
                src={images}
                alt={description}
              />
        </div>
      </div>
    )
  }
}


Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  description: PropTypes.string
}