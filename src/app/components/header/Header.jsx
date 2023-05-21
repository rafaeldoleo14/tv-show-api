import './header.css'
import { useRandomData } from "../../hooks/useRandomData";
import { HeaderLayout } from '../layouts/headerLayout/HeaderLayout';
import {Link} from 'react-router-dom'

export const Header = () => {

    const {data} = useRandomData();

    return (
        
        <>
        
            <HeaderLayout>

                <img src={data?.image_thumbnail_path} alt="" className="img1"/>

                <div className="header-content">

                    <img src={data?.image_thumbnail_path} alt="" className="img2"/>

                    <div>
                        <h1>{data?.name}</h1>

                        <p>{data?.permalink}</p>

                        <p>Start date: {data?.start_date}</p>

                        <p>{ data?.end_date === null ? 'In broadcast' : 'Finished'}</p>

                        <Link to={`/tv-show/${data?.id}`}><i className="bi bi-play-circle-fill"></i> PLAY</Link>
                    </div>

                </div>

            </HeaderLayout>
        
        </>

    )
}
