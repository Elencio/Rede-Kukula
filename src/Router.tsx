import {Route, Routes} from 'react-router-dom'
import { Register } from './Pages/Register'
import { Login } from './Pages/Login'
import { DefaultLayout } from './layouts/defaultLayout'
import { Home } from './Pages/Home'
import { PerfilUsuario } from './Pages/PerfilUsuario'
import { Challenges } from './Pages/ChallengesList'


export function Router(){
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout/>}>
      <Route path='/' element={<Home />}/>
      <Route path='/register' element={<Register />}/>
      </Route>
    </Routes>
  )
}