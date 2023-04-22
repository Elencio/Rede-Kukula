import styled from 'styled-components'


export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;

   img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 24px;
   }
`;


export const Username = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`;

export const Bio = styled.p`
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 32px;
  color: #555;
`;

export const Button = styled.button`
  padding: 16px 32px;
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
`;