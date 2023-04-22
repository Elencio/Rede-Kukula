import styled from "styled-components";



export const ChallengesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #333;
`;

export const ChallengeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 600px;
  height: 200px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
  padding: 24px;
`;

export const ChallengeTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`;

export const ChallengeDescription = styled.p`
  font-size: 18px;
  font-weight: normal;
  color: #555;
`;