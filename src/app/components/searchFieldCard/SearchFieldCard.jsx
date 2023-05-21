
import './searchFieldCard.css';
import {Link} from 'react-router-dom'

export const SearchFieldCard = (data) => {

    const {id, name, image_thumbnail_path } = data;

    return (
        <Link to={`/tv-show/${id}`} className="searchBox-content">
            <img src={image_thumbnail_path} alt="" />
            <p>{name}</p>
        </Link>
    )
}
