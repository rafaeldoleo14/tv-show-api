import { Navigate, Route, Routes } from "react-router-dom"
import { MainPage } from "../app/pages/mainPage/MainPage"
import { Navbar } from "../app/shared/components/navbar/Navbar"
import { useStartData } from "../app/hooks/useStartData"
import { Loader } from "../app/components/loader/Loader"
import { useEffect } from "react"
import { SingleTvShowPage } from "../app/pages/singleTvShowPage/SingleTvShowPage"

// Componente donde se centralizan las rutas
// Version de react router dom: 6, se usar la 6.4 pero me gusta mas la anterior AHHAHAAHHA
export const AppRouter = () => {

    const {startDataComponent, pagination} = useStartData();

    useEffect(()=>{
      startDataComponent();
    },[pagination])

  return (
    <>
        <Loader/>
          
          <Navbar/>

              <Routes>

                  <Route path="/tv-show" element={<MainPage/>}/>

                  <Route path="/tv-show/:id" element={<SingleTvShowPage/>}/>

                  <Route path="/*" element={<Navigate to='tv-show'/>}/>

              </Routes>
    </>
  )
}
