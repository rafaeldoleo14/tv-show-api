import './headerLayout.css'
import { useSelector } from 'react-redux';

/* eslint-disable react/prop-types */
export const HeaderLayout = ({children}) => {

    const {isLoading} = useSelector(state => state.tvShow);

    return (
        
        <>
        
            <header className={`${!isLoading ? 'up': ''}`}>

                {children}
                
            </header>
        
        </>

    )
}