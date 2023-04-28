import { useState } from 'react';
import { Challenges } from "../../Database/database";
import { propsChallenges } from '../../Database/database';
import { Button, CardChallenge, HomeContainer, Subtitle, Title, Information, ImageContainer } from "./styles";
import BacgroundImage from '../../assets/background.1.png'


export function Home(){
  const [currentChallenge, setCurrentChallenge] = useState<propsChallenges | null>(null);

  function handleChallengeClick() {
    const randomIndex = Math.floor(Math.random() * Challenges.length);
    const challenge = Challenges[randomIndex];
    setCurrentChallenge(challenge);
  }

  return (
    <HomeContainer>
         <Title>Jogos de Casais </Title>
         <Subtitle>Gere desafios para você e seu parceiro(a)</Subtitle>
         <Button onClick={handleChallengeClick}>Gerar desafio</Button>

         {currentChallenge && (
            <CardChallenge>
              <Information>
              <strong>{currentChallenge.title}</strong>
              <span>{currentChallenge.description}</span>
              <span>{currentChallenge.rules}</span>
              </Information>

              <ImageContainer>
                  <img src={BacgroundImage} alt="" />
              </ImageContainer>
            </CardChallenge>

         )}
    </HomeContainer>
  )
}