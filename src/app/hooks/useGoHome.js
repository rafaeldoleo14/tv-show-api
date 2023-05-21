
import {useNavigate} from 'react-router-dom';

// Custom hook para volver a la ruta principal
export const useGoHome = () => {
    
    const navigate = useNavigate();

    const onHome = ()=>{
        navigate('/tv-show')
    }

    return {
        onHome
    }

}
