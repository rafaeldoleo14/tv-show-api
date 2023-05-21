
import './episodesCard.css';
import noImg from '../../../assets/no-img/no-image.jpg'

export const EpisodesCard = (episodes) => {

  const {name, episode, season, img} = episodes;

  return (
    <div>
        <img src={!img ? noImg : img} alt={name} />
        <p>{name.slice(0,10)} {`${season} x ${episode}`}</p>
    </div>
  )
}
