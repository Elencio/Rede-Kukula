import styled from 'styled-components'

export const PrincipalContainer = styled.div `
  background: #f6f5f7;
	display: flex;
  flex-direction: row;
	justify-content: center;
	align-items: center;
  padding: 6rem;
	font-family: 'Montserrat', sans-serif;
	height: 100vh;
  
  
h1 {
	font-weight: bold;
	margin: 0;
 }

h2 {
	text-align: center;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #FF4B2B;
	background-color: #FF4B2B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

`

export const FormContainer = styled.div`
  width: 40rem;
	height: 100%;
	transition: all 0.6s ease-in-out;
`

export const OverlayContainer = styled.div`
	width: 40rem;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;

`

export const Overlay= styled.div`
	background: #FF416C;
	background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #FF4B2B, #FF416C);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
	left: -100%;
	height: 100%;
  	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
`

export const SocialContainer =styled.div`
margin: 20px 0;

a {
  border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
}
`

export const OverlayFix = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
`