
import { createContext, useState, useEffect } from 'react'
import { } from 'react-router-dom'
import clienteAxios from '../config/clienteAxios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    // const [hola, setHola] = useState('Hola mundo')
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const autenticarUSuario = async () => {
            const token = localStorage.getItem('token')

            if(!token) return;

            const config = {
                headers: {
                    "Conent-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
    
            try {
                const {data} = await clienteAxios('/usuarios/perfil', config)
                setAuth(data)
            } catch (error) {
                
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
