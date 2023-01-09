
import { createContext, useState, useEffect } from 'react'


const ProyectosContext = createContext();

const ProyectosProvider = ({ children }) => {

    

    return (

        <ProyectosContext.Provider
            value={{

            }}
        >
            {children}
        </ProyectosContext.Provider>
    )
}

export {
    ProyectosProvider
}

export default ProyectosContext
