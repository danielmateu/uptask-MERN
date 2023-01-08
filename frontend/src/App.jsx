import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { AuthLayout } from './layouts/AuthLayout'
import { ConfirmarCuenta, Login, NuevoPasword, OlvidePassword, Registrar } from './paginas'


// console.log(import.meta.env.VITE_BACKEND_URL)

function App() {


  return (

    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path='registrar' element={<Registrar />} />
            <Route path='olvide-password/' element={<OlvidePassword />} />
            <Route path='olvide-password/:token' element={<NuevoPasword />} />
            <Route path='confirmar/:id' element={<ConfirmarCuenta />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
