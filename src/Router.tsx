import {Route, Routes} from 'react-router-dom'
import { Register } from './Pages/Register'
import { Login } from './Pages/Login'
import { DefaultLayout } from './layouts/defaultLayout'
import { Home } from './Pages/Home'


export function Router(){
  return (
    <Routes>
      <Route path='/Login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/' element={<DefaultLayout/>}>
      <Route path='/' element={<Home />}/>
      </Route>
    </Routes>
  )
}