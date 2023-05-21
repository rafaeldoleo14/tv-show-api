import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSearchingData } from "../store/slices/thunks";

// custom hook para el manejo del input encargado del search
export const useHandleSearch = () => {
  
    const dispatch = useDispatch();
    const {searchData, pagination} = useSelector(state => state.tvShow);
    const [inputValue, setInputValue] = useState('');
    const [hiddenBox, setHiddenBox] = useState(false);

    // Metodo para capturar el valor del input
    const handleInput = (e)=>{
        const value = e.target.value;
        setInputValue(value);
        dispatch(startSearchingData(value, pagination));

        if(!hiddenBox){
            setHiddenBox(hiddenBox => !hiddenBox);
        }
        
    }

    // Metodo para cerrar la caja del input
    const onCloseBox = ()=>{
        setHiddenBox(hiddenBox => !hiddenBox);
        setInputValue('');
    }

    return {
        inputValue,
        searchData,
        handleInput,
        hiddenBox,
        onCloseBox
    }

}
