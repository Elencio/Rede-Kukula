import { ArrowRight } from "phosphor-react";
import { LoginContainer, LogoTitle, LoginInformation, Options } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthGoogleContext";
import { Navigate } from "react-router-dom";


export function Login(){

  const { SignInwithGoogle, signed } = useContext(AuthContext)

  if(signed) {
    return <Navigate to='/usuario'/>
  }

  return(
    <LoginContainer>
      <LogoTitle>
        Couplegame
      </LogoTitle>
      <LoginInformation>
        <form action="">
           <strong onClick={SignInwithGoogle}>Entrar com Google</strong>
           <input type="text" placeholder="informe seu email"/>
           <input type="password" placeholder="insira o seu password" />
           <Options>
          <span>Esqueceu a senha</span>
          <span>Registrar
            < ArrowRight size={22}/>
          </span>
           </Options>
           <button type="submit">Entrar</button>
        </form>

        
      </LoginInformation>
    </LoginContainer>
  )
}