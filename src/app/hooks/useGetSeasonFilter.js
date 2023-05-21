import { useSelector } from "react-redux";


export const useGetSeasonFilter = (season = '1') => {
  
    const {singleTvShow} = useSelector(state => state.tvShow);

    const uniqueSeasons = [...new Set(singleTvShow?.episodes.map(episode => episode.season))]

    const episodesFilter = singleTvShow?.episodes.filter(episodes => episodes.season.toString() === season);

    const mergedArray = episodesFilter?.map((objeto) => {
        return { ...objeto, img: singleTvShow.pictures[Math.floor(Math.random() * 7) + 1] };
    });

    return {
        uniqueSeasons,
        mergedArray
    }
}
