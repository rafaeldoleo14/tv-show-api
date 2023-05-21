
import { startGetTvShowData } from '../store/slices/thunks';
import { useDispatch, useSelector } from 'react-redux';

// Custom hook que llama todos los tv shows iniciales cuando el componente principal se monta
export const useStartData = () => {
  
    const dispatch = useDispatch();
    const {pagination} = useSelector(state => state.tvShow);

    const startDataComponent = ()=>{
        dispatch(startGetTvShowData(pagination));
    }

    return {
        startDataComponent,
        pagination
    }

}
