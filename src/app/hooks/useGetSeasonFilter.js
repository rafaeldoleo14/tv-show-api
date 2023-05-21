import { useSelector } from "react-redux";

export const useGetSeasonFilter = (season = '1') => {
  
    const {singleTvShow} = useSelector(state => state.tvShow);

    const uniqueSeasons = [...new Set(singleTvShow?.episodes.map(episode => episode.season))] // El metodo set se utiliza para capturar valores unicos

    const episodesFilter = singleTvShow?.episodes.filter(episodes => episodes.season.toString() === season); // Se filtran los objetos que coincidan con la temporada que se mande por parametro

    const mergedArray = episodesFilter?.map((objeto) => {
        return { ...objeto, img: singleTvShow.pictures[Math.floor(Math.random() * 7) + 1] };
    }); // Se añaden a los episodios filtrados imagenes aleatorias de algunos episodios. 
    // Nota: solo son 7 imagenes, por eso se pueden repetir algunas

    return {
        uniqueSeasons,
        mergedArray
    }
}
