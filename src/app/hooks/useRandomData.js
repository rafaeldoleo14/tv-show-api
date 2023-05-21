import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export const useRandomData = () => {
 
    const {tvShowData, isLoading} = useSelector(state => state.tvShow);

    const [data, setData] = useState([]);

    const getRandomHeaderContent = ()=>{
        setData(tvShowData[Math.floor(Math.random() * 15) + 1]);
    }

    useEffect(()=>{
        getRandomHeaderContent()
    },[isLoading])

    return {
        data
    }

}
