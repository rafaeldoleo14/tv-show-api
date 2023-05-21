
import './searchFiel.css';
import { useHandleSearch } from '../../hooks/useHandleSearch';
import { SearchFieldCard } from '../searchFieldCard/SearchFieldCard';
import { useSelector } from 'react-redux';

export const SearchField = () => {

    const {inputValue, searchData, handleInput, onCloseBox, hiddenBox} = useHandleSearch();
    const {isCloseMenu} = useSelector(state => state.tvShow);
    
  return (
    <>
    
        <div className={`search-container ${isCloseMenu ? 'hidden' : ''}`}>

            <input type="text" placeholder='Search...' value={inputValue} onChange={handleInput}/>

            <div className='search-box' style={{display: `${hiddenBox ? '' : 'none'}`}} >

                <i onClick={onCloseBox} className="bi bi-x-circle-fill icon-box"></i>

                <h3>Searching: {inputValue}</h3>

                <div className='line'></div>

                {
                    // Si el arreglo no esta empty o vacio se itera la lista
                    searchData.length !== 0 ?

                    searchData && searchData?.map((data)=> (
                        <SearchFieldCard key={data.id} {...data}/>
                    ))
                    
                    : <p>Not found</p>
                        
                }

            </div>


        </div>

    </>
  )
}
