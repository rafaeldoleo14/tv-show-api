
import { useDispatch, useSelector } from 'react-redux'
import './pagination.css'
import { startPagination } from '../../store/slices/tvShowSlice';

export const Pagination = () => {

  const dispatch = useDispatch();
  const {pagination} = useSelector(state => state.tvShow)

  const counter = (value)=>{
    window.scrollTo(0,0)
    dispatch(startPagination(value))
  }

  return (
    <>
    
        <div className='pagination-content'>

            <button 
              disabled={pagination <= 1} 
              onClick={()=> counter(-1)}> 
              <i className="bi bi-arrow-left-circle-fill"></i> 
            </button>

            <p>{pagination}</p>

            <button
              disabled={pagination >= 1182} 
              onClick={()=> counter(1)}> 
              <i className="bi bi-arrow-right-circle-fill"></i> 
            </button>

        </div>
    
    </>
  )
}
