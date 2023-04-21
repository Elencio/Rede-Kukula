import { FormContainer, Overlay, OverlayContainer, OverlayFix, PrincipalContainer, } from './styles';


export function Register() {
  return(
    <PrincipalContainer>
      <FormContainer >
        <form action="#">
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <input type="text" placeholder="Address" required />
              <input type="text" placeholder="City" required />
              <input type="text" placeholder="State" required />
              <input type="text" placeholder="Zip Code" required />
              <button>Register</button>  
        </form>
      </FormContainer>
      <OverlayContainer>
        <Overlay >
            <OverlayFix>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
            </OverlayFix>
        </Overlay>
      </OverlayContainer>
    </PrincipalContainer>
  )
}  
