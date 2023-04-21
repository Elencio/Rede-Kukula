import { useState } from 'react';

import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';

import { GoogleLogo, GraduationCap} from 'phosphor-react'

import { FormContainer, Overlay, OverlayContainer, OverlayFix, PrincipalContainer, SocialContainer } from './styles';

import { auth } from '../../services/firebase';


export function Login() {
  
  const [userdata, setUserData] = useState<User>({} as User);

 function handleEntrarUsandoGoogle(){
   const provider = new GoogleAuthProvider();

   signInWithPopup( auth, provider).then((result) => {
       setUserData(result.user)
   }).catch((error) => {
    console.log('Alguma Coisa Nao correr bem')
   }
   )
 }

  return(
    <PrincipalContainer>
      <FormContainer >
        <form action="#">
              <h1>Rede Kukula</h1>
              <SocialContainer onClick={handleEntrarUsandoGoogle}>
                <span>Entrar com google</span>
                <GoogleLogo size={24}  weight='fill'/>
              </SocialContainer>
              <span>ou usa a sua conta</span>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <a href="#">esqueceu sua senha?</a>
              <button>Entrar</button>
        </form>
      </FormContainer>
      <OverlayContainer>
        <Overlay >
            <OverlayFix>
              <GraduationCap size={88} weight="fill" />
              <h1>Bem vindo! A Rede Kukula Pabhodzi</h1>
              <p>Junte-se a um conjuntos de Estudantes que buscam e sonham com um futuro melhor. Juntos crescemos e fazemos diferença </p>
            </OverlayFix>
        </Overlay>
      </OverlayContainer>
    </PrincipalContainer>
  )
}  
