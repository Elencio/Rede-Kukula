import styled from 'styled-components'



export const FormContainer = styled.div`
   margin: 3rem auto;
	 height: auto;
	 width: 35rem;
   display: flex;
   gap: 3rem;
	 align-items: center;
	 justify-content: center;
   flex-direction: column;
	 justify-content: center;
	 align-items: center;
	 
  

	h1 {
		font-family: 'Roboto', sans-serif;
		font-size: 1.5rem;
		font-weight: 400;

	}


   form {
		width: 30rem;
	  height: 50rem;
		padding: 3rem 3rem;
		font-family: 'Outfit', sans-serif;
	  font-weight: 300;
    border-radius: 10px;
	  border: 3px solid #be7702;
  
    
	  display: flex;
	  flex-direction: column;
		gap: 1.5rem;
		align-items: center;
		justify-content: center;
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
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: 0;
	box-shadow: 0 0 0 2px  #be7702;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}



input {
	background-color: #eee;
	border-radius: 10px;
	border: none;
	padding: 25px 15px;
	margin: 8px 0;
	width: 100%;
}



input:focus {
      outline: 0;
      box-shadow: 0 0 0 2px #be7702;
    }

`





