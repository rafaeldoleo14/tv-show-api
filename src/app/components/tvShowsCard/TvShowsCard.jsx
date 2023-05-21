
import { Link } from 'react-router-dom';
import './tvShowsCard.css';

export const TvShowsCard = (shows) => {

    const {id, name, image_thumbnail_path} = shows;

    return (
        <Link to={`/tv-show/${id}`}>

            <img src={image_thumbnail_path} 
            alt={name} />

            <p>{name}</p>

        </Link>
    )
}
