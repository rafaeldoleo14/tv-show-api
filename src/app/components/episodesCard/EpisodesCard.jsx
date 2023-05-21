
import './episodesCard.css';

export const EpisodesCard = (episodes) => {

  const {name, episode, season, img} = episodes;

  return (
    <div>
        <img src={img} alt={name} />
        <p>{name.slice(0,10)} {`${season} x ${episode}`}</p>
    </div>
  )
}
