import styled from "styled-components";

export default function Home() {
  return (
    <StyledContainer>
      <h1>Willkommen zum 🐙-Capstone-Template!</h1>
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
