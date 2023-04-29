import { useContext } from "react"

import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../contexts/AuthGoogleContext"

export function PrivateRouter(){
  
  const { signed } = useContext(AuthContext)

  return signed ? <Outlet /> : <Navigate to='/' />
}