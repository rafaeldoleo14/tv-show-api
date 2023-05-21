
import { useEffect } from 'react';
import { startGetSingleTvShow } from '../../store/slices/thunks';
import { HeaderLayout } from '../layouts/headerLayout/HeaderLayout'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './singleTvShowInfo.css';

export const SingleTvShowInfo = () => {

    const {id} = useParams(); // Capturar el parametro proporcionado en la url
    const dispatch = useDispatch();
    const {singleTvShow} = useSelector(state => state.tvShow);

    const getSingleTvShow = ()=>{ // Metodo para despachar la action de obtener tv show
        dispatch(startGetSingleTvShow(id));
    }

    useEffect(()=>{ // Cuando se monte el componente se dispara el efecto que llama el metodo getSingleTvShow()
        getSingleTvShow();
    },[])

  return (
    
    <HeaderLayout>

        {/* (?) --> se utiliza por si la propiedad no existe, typescript resuelve eso :) */}
        <img src={singleTvShow?.image_thumbnail_path} alt="" className="img1"/>

        <div className="header-content">

            <img src={singleTvShow?.image_thumbnail_path} alt="" className="img2"/>

            <div>
                <h1>{singleTvShow?.name}</h1>

                <p>{singleTvShow?.permalink}</p>

                <p>Start date: {singleTvShow?.start_date}</p>

                <p>{ singleTvShow?.end_date === null ? 'In broadcast' : 'Finished'}</p>

                <div className="description-container">
                    <p>{singleTvShow?.description}</p>
                </div>

            </div>

        </div>

    </HeaderLayout>

  )
}
