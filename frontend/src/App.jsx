import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthLayout } from './layouts/AuthLayout'
import {ConfirmarCuenta, Login, NuevoPasword, OlvidePassword, Registrar} from './paginas'




function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path='registrar' element={<Registrar />} />
          <Route path='olvide-password/' element={<OlvidePassword />} />
          <Route path='olvide-password/:token' element={<NuevoPasword />} />
          <Route path='confirmar/:id' element={<ConfirmarCuenta />} />
        </Route>
      </Routes>

      {/* <Routes>
        <Route path="/">

        </Route>
      </Routes> */}
    </BrowserRouter>
  )
}

export default App
