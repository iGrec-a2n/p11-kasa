import './Host.scss'
import PropTypes from 'prop-types'

export default function Host({name, picture}) {

  const [hostFirstName, hostLastName] = name.split(' ')

  return (
    <div className="host" aria-label="informations sur l'hôte">
      <h3>
        <span>{hostFirstName}</span>
        <span>{hostLastName}</span>
      </h3>
      <img src={picture} alt={`photos de ${name}`}/>
    </div>
  )
}

Host.poropTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
}