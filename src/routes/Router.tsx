import {Route, Routes} from 'react-router-dom'
import { Login } from '../Pages/Login'
import { DefaultLayout } from '../layouts/defaultLayout'
import { Home } from '../Pages/Home'
import { PrivateRouter } from './PrivateRouter'
import { PerfilUsuario } from '../Pages/PerfilUsuario'
import { Register } from '../Pages/Register'



export function Router(){
  return (
    <Routes>
       <Route path='/login'  element={<Login />}/>
      <Route path='/' element={<DefaultLayout/>}>
      <Route path='/' element={<Home />}/>
      <Route path='/' element={<PrivateRouter/>}>
         <Route path='/usuario' element={<PerfilUsuario />}/>
      </Route>
      <Route path='/register' element={<Register />}/>
      </Route>
    </Routes>
  )
}