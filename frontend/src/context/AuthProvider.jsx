
import { createContext, useState, useEffect } from 'react'

import {} from 'react-router-dom'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    // const [hola, setHola] = useState('Hola mundo')
    const [auth, setAuth] = useState({});



    return (
        <AuthContext.Provider
            value={{
                // hola
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
