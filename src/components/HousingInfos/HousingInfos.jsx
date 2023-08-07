import './HousingInfos.scss'

import HousingTitle from "../HousingTitle/HousingTitle"
import Tags from "../Tags/Tags"
import Host from "../Host/Host"
import Rate from "../Rate/Rate"


export default function HousingInfos({title, location, tags, rating, host}) {
  return (
    <div className='housing-infos'>
            <div className='infos-section'>
                <HousingTitle title={title} location={location}/>
                <Tags listeTags={tags}/>
            </div>
            <div className='infos-section'>
                <Host name={host.name} picture={host.picture} />
                <Rate rating={parseInt(rating)}/>
            </div> 
        </div>
  )
}
