import { ChallengeCard, ChallengeDescription, ChallengeTitle, ChallengesContainer, Title } from "./styles";




export function Challenges() {
  return (
    <ChallengesContainer>
      <Title>Lista de desafios</Title>
      <ChallengeCard>
        <ChallengeTitle>Desafio 1</ChallengeTitle>
        <ChallengeDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero condimentum, sodales quam vel, efficitur justo.</ChallengeDescription>
      </ChallengeCard>
      <ChallengeCard>
        <ChallengeTitle>Desafio 2</ChallengeTitle>
        <ChallengeDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero condimentum, sodales quam vel, efficitur justo.</ChallengeDescription>
      </ChallengeCard>
      <ChallengeCard>
        <ChallengeTitle>Desafio 3</ChallengeTitle>
        <ChallengeDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero condimentum, sodales quam vel, efficitur justo.</ChallengeDescription>
      </ChallengeCard>
    </ChallengesContainer>
  );
}
