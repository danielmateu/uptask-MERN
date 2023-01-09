
import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import clienteAxios from '../config/clienteAxios';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    // const [hola, setHola] = useState('Hola mundo')
    const [auth, setAuth] = useState({});
    const [cargando, setCargando] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        const autenticarUSuario = async () => {
            const token = localStorage.getItem('token')

            if(!token){
                setCargando(false)
                return;
            } 
                

            const config = {
                headers: {
                    "Conent-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
    
            try {
                const {data} = await clienteAxios('/usuarios/perfil', config)
                setAuth(data)
                navigate('/proyectos');
            } catch (error) {
                setAuth({})
            }finally{
                setCargando(false)
            }
        }
        autenticarUSuario()
    }, [])


    return (
        <AuthContext.Provider
            value={{
                // hola
                auth,
                setAuth,
                cargando,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext
