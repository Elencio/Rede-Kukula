import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

export function Header(){
  return(
    <HeaderContainer>
      <strong>Couplegame</strong>
      <NavLink to='/login'>
      <span>faca o login</span>
      </NavLink>
    </HeaderContainer>
  )
}