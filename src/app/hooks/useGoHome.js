
import {useNavigate} from 'react-router-dom';

export const useGoHome = () => {
    
    const navigate = useNavigate();

    const onHome = ()=>{
        navigate('/tv-show')
    }

    return {
        onHome
    }

}
