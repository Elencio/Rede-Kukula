import styled from 'styled-components'


export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;

`;

export const Title = styled.h1`
  font-family: 'Outfit', sans-serif;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`;

export const Subtitle = styled.p`
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 32px;
  color: #555;
`;

export const Button = styled.button`
  width: 234px;
  height: 43px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  background-color: #fca311;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #ffba42;
  }
`

export const CardChallenge = styled.div`
    margin-top: 4rem;
    background-color: #808080;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #808080;
    color: #000;
   

 ;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;


     span {
       font-size: 1.1rem;
       line-height: 1.7;
       font-family: 'Rubik', sans-serif;
     }

     strong {
       font-size: 1.5rem;
       line-height: 1.7;
       font-family: 'Outfit', sans-serif;
     }
`
