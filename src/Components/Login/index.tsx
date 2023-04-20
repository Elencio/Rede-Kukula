import React, { useState } from 'react';
import { FormContainer, Overlay, OverlayContainer, OverlayFix, PrincipalContainer, SocialContainer } from './styles';


export function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  return (
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
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
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
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
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
              <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
            </>
          )}
        </Overlay>
      </OverlayContainer>
    </PrincipalContainer>
  )
}
