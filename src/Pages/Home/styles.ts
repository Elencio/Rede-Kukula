import styled from 'styled-components'


export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

export const Title = styled.h1`
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

export const Input = styled.input`
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  margin-bottom: 2rem;
`;

export const Textarea = styled.textarea`
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  height: 10rem;
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const Checkbox = styled.input`
  margin-right: 1rem;
`;

export const CheckboxLabel = styled.label`
  font-size: 1.5rem;
  color: #555;
`;
