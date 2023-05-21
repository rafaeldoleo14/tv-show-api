import { useState } from "react";

// Custom hook para el manejo del select de las temporadas
export const useHandleSelect = () => {
  
    const [selectValue, setSelectValue] = useState('1');

    const handleSelect = (e)=>{
        const value = e.target.value;
        setSelectValue(value);
    }

    return {
        selectValue,
        handleSelect
    }

}
