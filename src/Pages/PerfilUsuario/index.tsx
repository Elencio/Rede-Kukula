import { useContext } from "react"
import { Bio, Button, ProfileContainer, Username } from "./styles"
import { AuthContext } from "../../contexts/AuthGoogleContext"


export function PerfilUsuario(){
  const { user } = useContext(AuthContext)
  return (
    <ProfileContainer>
    <img src={user?.photoURL ?? ""} alt="Avatar" />
      <Username>{user?.displayName}</Username>
      <Bio>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero condimentum, sodales quam vel, efficitur justo. Mauris aliquam faucibus odio in sagittis.</Bio>
      <Button>Editar perfil</Button>
    </ProfileContainer>
  )
}