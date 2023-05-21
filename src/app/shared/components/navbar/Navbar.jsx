
import '../navbar/navbar.css'
import logo from '../../../../assets/logo/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { SearchField } from '../../../components/searchField/SearchField';
import { startCloseMenu } from '../../../store/slices/tvShowSlice';
import { useGoHome } from '../../../hooks/useGoHome';
import { useLocation } from 'react-router-dom';

export const Navbar = () => {

  const {isLoading, isCloseMenu} = useSelector(state => state.tvShow);
  const dispatch = useDispatch();
  const {onHome} = useGoHome();
  const {pathname} = useLocation();

  const toogleMenu = ()=>{
    dispatch(startCloseMenu());
  }

  return (
    <>
    
        <div className={`nav-container ${!isLoading ? 'up': ''}`}>

            <nav>

                <div onClick={onHome} className="logo">
                    <img src={logo} alt="logo" />
                    <p>TV shows</p>
                </div>

                {

                  pathname !== '/tv-show' ? <></> 

                  : 
                  
                  <>
                  
                    <SearchField/>

                    <div className='menu-icons'>
                      <i onClick={toogleMenu} style={{display: `${isCloseMenu ? '' : 'none'}`}}  className="bi bi-list"></i>
                      <i onClick={toogleMenu} style={{display: `${isCloseMenu ? 'none' : ''}`}}  className="bi bi-x-lg"></i>
                    </div>
                  
                  </>
                  
                }

            </nav>

        </div>
    
    </>
  )
}
