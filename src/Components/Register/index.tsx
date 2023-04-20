import React, { useState } from 'react';
import { FormContainer, Overlay, OverlayContainer, OverlayFix, PrincipalContainer, SocialContainer } from './styles';


export function Register() {
const [isSignUp, setIsSignUp] = useState(true);

const handleSignInClick = () => {
setIsSignUp(false);
};

const handleSignUpClick = () => {
setIsSignUp(true);
};



  return(
    <PrincipalContainer>
      <FormContainer className={`form-container ${isSignUp ? 'sign-up-container' : 'sign-in-container'}`}>
        <form action="#">
          {isSignUp ? (
            <>
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <input type="text" placeholder="Address" required />
              <input type="text" placeholder="City" required />
              <input type="text" placeholder="State" required />
              <input type="text" placeholder="Zip Code" required />
              <button>Register</button>
            </>
          ) : (
            <>
              
              <h1>Sign in</h1>
              <SocialContainer>
                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              </SocialContainer>
              <span>or use your account</span>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
            </>
          )}
        </form>
      </FormContainer>
      <OverlayContainer>
        <Overlay >
          {isSignUp ? (
            <OverlayFix>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={handleSignInClick}>Sign In</button>
            </OverlayFix>
          ) : (
            <>
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={handleSignUpClick}>Register</button>
            </>
          )}
        </Overlay>
      </OverlayContainer>
    </PrincipalContainer>
  )
}  
