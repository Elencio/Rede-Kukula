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
  font-family: 'Outfit', sans-serif;
  font-weight: 300;
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
    padding: 1.5rem;
    margin-top: 4rem;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    box-shadow: 0 0 0 3px #808080;
    color: #000;
  
`

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    letter-spacing: 1.5;
    padding: 0.5rem 1rem;


     span {
       font-size: 1.1rem;
       line-height: 1.7;
       font-family: 'Outfit', sans-serif;
       font-weight: 300;
     }

     strong {
       font-size: 1.5rem;
       line-height: 1.7;
       font-family: 'Rubik', sans-serif;
       font-weight: 500;
     }
`

export const ImageContainer = styled.div`
`