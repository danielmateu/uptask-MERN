import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { ProyectosProvider } from './context/ProyectosProvider'
import { AuthLayout } from './layouts/AuthLayout'
import { RutaProtegida } from './layouts/RutaProtegida'
import { ConfirmarCuenta, Login, NuevoPasword, OlvidePassword, Registrar } from './paginas'
import EditarProyecto from './paginas/EditarProyecto'
import NuevoProyecto from './paginas/NuevoProyecto'
import Proyecto from './paginas/Proyecto'
import Proyectos from './paginas/Proyectos'

// console.log(import.meta.env.VITE_BACKEND_URL)

function App() {


  return (

    <BrowserRouter>
      <AuthProvider>
        <ProyectosProvider>

          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path='registrar' element={<Registrar />} />
              <Route path='olvide-password/' element={<OlvidePassword />} />
              <Route path='olvide-password/:token' element={<NuevoPasword />} />
              <Route path='confirmar/:id' element={<ConfirmarCuenta />} />
            </Route>
            <Route path='/proyectos' element={<RutaProtegida />}>
              <Route index element={<Proyectos />} />
              <Route path='crear-proyecto' element={<NuevoProyecto />} />
              <Route path=':id' element={<Proyecto />} />
              <Route path='editar/:id' element={<EditarProyecto />} />
            </Route>
          </Routes>

        </ProyectosProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
