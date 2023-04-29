import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
	flex-direction: row;
	align-items: center;
  justify-content: center;
	align-items: center;
	gap: 12rem;
	padding: 8rem 0;


	form {
    font-family: 'Outfit', sans-serif;
	  font-weight: 300;
		font-size: 1rem;
		gap: 1.5rem;
    width: 35rem;
		display: flex;
		flex-direction: column;
		

		input {
	   background-color: #eee;
	border-radius: 10px;
	border: none;
	padding: 25px 15px;
	margin: 8px 0;
	width: 100%;
	font-size: 1.2rem;
	font-family: 'Outfit', sans-serif;
    }



  input:focus {
      outline: 0;
      box-shadow: 0 0 0 2px #be7702;
    }

		button {
	margin-top: 1rem;
	border-radius: 10px;
	border: 1px solid  #be7702;
	background-color:  #be7702;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in; 
	cursor: pointer;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: 0;
	box-shadow: 0 0 0 2px  #be7702;
}


 strong {
	cursor: pointer;
	font-size: 1rem;
	font-family: 'Outfit', sans-serif;
	font-weight: 800;
 }

 span {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap:0.5rem;
	cursor: pointer;
 }
	}
`


export const LogoTitle = styled.div`
  font-family: 'Outfit', sans-serif;
	font-size: 3rem;
	font-weight: 800;
	line-height: 1.7;
	justify-content: center;
	letter-spacing: 1.5;
  display: flex ;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`

export const LoginInformation = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1rem;
`

export const Options = styled.div`
   display: flex;
	 flex-direction: row;
	 justify-content: space-between;
	 padding: 1rem;
`


