
import './episodes.css';
import { useGetSeasonFilter } from '../../hooks/useGetSeasonFilter';
import { useHandleSelect } from '../../hooks/useHandleSelect';
import { EpisodesCard } from '../episodesCard/EpisodesCard';

export const Episodes = () => {

    const {selectValue, handleSelect} = useHandleSelect();
    const {uniqueSeasons, mergedArray} = useGetSeasonFilter(selectValue);

  return (
    <>
    
        <div className="episodes-container">

            <div className='season-options'>
                <p>Select season</p>
                <select onChange={handleSelect} value={selectValue}>

                    {
                        uniqueSeasons?.map((seasons)=> (
                            <option key={seasons} value={seasons}>Temporada {seasons}</option>
                        ))
                    }

                </select>
            </div>

            <div className='episodes'>

                {

                    mergedArray?.map((episodes)=> (
                        <EpisodesCard key={episodes?.name} {...episodes}/>
                    ))

                }

            </div>

        </div>
    
    </>
  )
}
