import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"



export const RutaProtegida = () => {

    const {auth, cargando} = useAuth();

    if(cargando) return 'Cargando...'

    // console.log(auth)
    return (
        <>
            {auth._id ? <Outlet/> : <Navigate to='/'/> }
        </>
    )
}
