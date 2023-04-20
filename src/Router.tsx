import {Route, Routes} from 'react-router-dom'
import { Login } from './Components/Login'
import { Register } from './Components/Register'

export function Router(){
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/Register' element={<Register />}/>
    </Routes>
  )
}