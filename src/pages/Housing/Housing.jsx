import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './Housing.scss'
import Loader from '../../components/Loader/Loader'
import Carousel from '../../components/Carousel/Carousel'
import HousingInfos from '../../components/HousingInfos/HousingInfos'
import Collapse from '../../components/Collapse/Collapse'

export default function Housing() {
    // récupère l'id du logement en cours
    const params = useParams()
    const currentHousingId = params.id

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [currentHousing, setCurrentHousing] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = () => {
            fetch('../data/data.json')
            .then(res => res.json())
            .then(
                (result) => {
                    const findCurrentHousing = result.find(housing => housing.id === currentHousingId)
                    if (!findCurrentHousing) navigate('*')
                    setCurrentHousing(findCurrentHousing)
                    setIsLoaded(true)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
        }
        fetchData()    
    }, [currentHousingId, setCurrentHousing, navigate])

    return error ? <p>Erreur : {error.message}</p>
    : !isLoaded ? <Loader />
    : <div className='housing'>
        <Carousel images={currentHousing.pictures} description={currentHousing.title}/>
        <HousingInfos {...currentHousing}/>
        <div className="collapses">
            <Collapse title="Description" text={currentHousing.description}/>
            <Collapse title="Équipements" list={currentHousing.equipments}/>
        </div>
    </div>;
}
