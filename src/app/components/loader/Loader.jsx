
import { ThreeCircles } from  'react-loader-spinner'
import './loader.css'
import { useSelector } from 'react-redux';

export const Loader = () => {

    const {isLoading} = useSelector(state => state.tvShow);

    return (
        <div style={{zIndex: `${isLoading ? '' : '0'}`}}
        className={`loader-container ${isLoading ? '' : 'hidden'}`}>
            <ThreeCircles
                height="70"
                width="70"
                color="white"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    )
}
