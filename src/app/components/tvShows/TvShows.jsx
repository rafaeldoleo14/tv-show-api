
import './tvShows.css'
import { Pagination } from '../pagination/Pagination';
import { useSelector } from 'react-redux';
import { TvShowsCard } from '../tvShowsCard/TvShowsCard';

export const TvShows = () => {

  const { tvShowData, isLoading } = useSelector(state => state.tvShow);

  return (
    <>
    
      <div className='tvshow-container'>

        <h1>TV Shows</h1>

        <div className='tvshow-cont'>

            {
              !isLoading && tvShowData.map((shows) => (

                <TvShowsCard key={shows.id} {...shows}/>

              ))
              
            } 

        </div>

        <Pagination/>

      </div>
    
    </>
  )
}
