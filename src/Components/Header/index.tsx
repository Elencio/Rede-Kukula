import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

export function Header(){
  return(
    <HeaderContainer>
      <strong>Couplegame</strong>

      <NavLink to='/register'>
      <span>Registre-se para aproveitar mais</span>
      </NavLink>
    </HeaderContainer>
  )
}