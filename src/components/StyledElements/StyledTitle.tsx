import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;
  color: #444;
  background-color: #1890ff;
  border: 1px solid #1890ff;
`;

const Title = styled.h1`
  color: #0d1a26;
  font-weight: 400;
`;

const StyledTitle = () => (
  <Container>
    <Title>Titre stylé</Title>
  </Container>
);

export default StyledTitle;
