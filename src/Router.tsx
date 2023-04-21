import {Route, Routes} from 'react-router-dom'
import { Register } from './Components/Register'
import { Login } from './Components/Login'


export function Router(){
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
  )
}