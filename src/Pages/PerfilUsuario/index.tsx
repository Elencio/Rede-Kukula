import { Bio, Button, ProfileContainer, Username } from "./styles"


export function PerfilUsuario(){
  return (
    <ProfileContainer>
      <img src="https://github.com/elencio.png" alt="Avatar" />
      <Username>Jane Doe</Username>
      <Bio>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero condimentum, sodales quam vel, efficitur justo. Mauris aliquam faucibus odio in sagittis.</Bio>
      <Button>Editar perfil</Button>
    </ProfileContainer>
  )
}