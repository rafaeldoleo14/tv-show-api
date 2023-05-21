import { getAlltvShowData, getSingleTvShow, startIsLoading, startSearchData } from "./tvShowSlice";

export const startGetTvShowData = (pagination = 1)=>{

    return async (dispatch)=>{

        try{

            dispatch(startIsLoading(true));

            const data = await fetch(`https://www.episodate.com/api/most-popular?page=${pagination}`);

            const resp = await data.json();

            dispatch(getAlltvShowData(resp.tv_shows));
            dispatch(startIsLoading(false));

        }
        catch(err){
            console.log(err)
        }

    }

}

export const startSearchingData = (value = '', pagination = 1)=>{


    return async (dispatch)=>{

        try{

            const data = await fetch(`https://www.episodate.com/api/search?q=${value}&page=${pagination}`);

            const resp = await data.json();

            dispatch(startSearchData(resp.tv_shows));

        }
        catch(err){
            console.log(err)
        }

    }

}

export const startGetSingleTvShow = (value = '')=>{

    return async (dispatch)=>{

        try{

            dispatch(startIsLoading(true));

            const data = await fetch(`https://www.episodate.com/api/show-details?q=${value}`);

            const resp = await data.json();

            dispatch(getSingleTvShow(resp.tvShow));
            dispatch(startIsLoading(false));

        }
        catch(err){
            console.log(err);
        }

    }

}