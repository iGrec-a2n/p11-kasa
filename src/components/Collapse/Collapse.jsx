import './Collapse.scss'
import { useState } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as CloseIcon } from '../../assets/icons/chevron-down.svg'


export default function Collapse({title, list, text }) {
  
  const [toggle, setToggle] = useState(false)
  const toggleState = () => {
    setToggle(!toggle)
  }
  
    return (

      <div className="collapse" aria-label="Contenu dépliable">
      {/* barre */}
        <button
        onClick={toggleState}
        className="collapse-bar"
        id="collapse-toggle"
        aria-label="Bouton de contrôle du contenu dépliable"
        aria-controls="collapse-content"
        aria-expanded={toggle ? 'true' : 'false'}
        >
          {title}
          <CloseIcon
            alt="Déplier / Replier"
            className={toggle ? 'close-icon open' : 'close-icon'}
          />
        </button>

      {/* contenu */}
        <div
        className="collapse-content"
        aria-labelledby="collapse-toggle"
        aria-hidden={toggle ? 'false' : 'true'}
        >

        {/* si contenu = liste */}
        {list &&
          <ul>
            {list.map(item => <li key={item.toString()}>{item}</li>)}
          </ul>}
        {/* si contenu = paragraphe */}
        {text && 
          <p>{text}</p>}

        </div>
      </div>
  )

}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.node,
  text: PropTypes.string
}